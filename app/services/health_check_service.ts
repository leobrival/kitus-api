import { DateTime } from 'luxon'
import Database from '@adonisjs/lucid/services/db'
import { HttpContext } from '@adonisjs/core/http'

interface HealthStatus {
  status: 'healthy' | 'unhealthy' | 'degraded'
  message: string
  timestamp: string
  details?: any
}

interface EndpointHealth {
  endpoint: string
  status: HealthStatus
  lastChecked: string
  responseTime?: number
}

interface ServiceHealth {
  service: string
  status: HealthStatus
  lastChecked: string
}

interface SystemHealth {
  status: 'healthy' | 'unhealthy' | 'degraded'
  timestamp: string
  uptime: number
  version: string
  services: ServiceHealth[]
  endpoints: EndpointHealth[]
  memory: {
    used: number
    total: number
    percentage: number
  }
}

export default class HealthCheckService {
  private static startTime = process.hrtime()

  /**
   * Vérifie la santé de la base de données
   */
  private static async checkDatabase(): Promise<HealthStatus> {
    try {
      await Database.connection().query().select(Database.rawQuery('1'))
      return {
        status: 'healthy',
        message: 'Database connection is working',
        timestamp: DateTime.now().toISO()
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        message: `Database connection failed: ${error.message}`,
        timestamp: DateTime.now().toISO()
      }
    }
  }

  /**
   * Vérifie la santé d'un endpoint spécifique
   */
  private static async checkEndpoint(endpoint: string, ctx: HttpContext): Promise<EndpointHealth> {
    const start = process.hrtime()
    try {
      const response = await ctx.client.get(`${process.env.APP_URL}${endpoint}`)
      const [seconds, nanoseconds] = process.hrtime(start)
      const responseTime = seconds * 1000 + nanoseconds / 1000000 // Conversion en millisecondes

      return {
        endpoint,
        status: {
          status: response.status() < 400 ? 'healthy' : 'unhealthy',
          message: `Endpoint responded with status ${response.status()}`,
          timestamp: DateTime.now().toISO()
        },
        lastChecked: DateTime.now().toISO(),
        responseTime
      }
    } catch (error) {
      return {
        endpoint,
        status: {
          status: 'unhealthy',
          message: `Failed to reach endpoint: ${error.message}`,
          timestamp: DateTime.now().toISO()
        },
        lastChecked: DateTime.now().toISO()
      }
    }
  }

  /**
   * Vérifie l'utilisation de la mémoire
   */
  private static checkMemory() {
    const used = process.memoryUsage()
    const total = os.totalmem()
    const percentage = (used.heapUsed / total) * 100

    return {
      used: Math.round(used.heapUsed / 1024 / 1024), // MB
      total: Math.round(total / 1024 / 1024), // MB
      percentage: Math.round(percentage * 100) / 100
    }
  }

  /**
   * Calcule le temps d'activité du serveur
   */
  private static getUptime(): number {
    const [seconds] = process.hrtime(this.startTime)
    return Math.round(seconds)
  }

  /**
   * Vérifie la santé globale du système
   */
  public static async check(ctx: HttpContext): Promise<SystemHealth> {
    const dbHealth = await this.checkDatabase()
    
    // Liste des endpoints à vérifier
    const endpoints = [
      '/api/v1/alerts',
      '/api/v1/weather/REUNION',
      '/api/v1/auth/me'
    ]

    const endpointChecks = await Promise.all(
      endpoints.map(endpoint => this.checkEndpoint(endpoint, ctx))
    )

    const services: ServiceHealth[] = [
      {
        service: 'Database',
        status: dbHealth,
        lastChecked: DateTime.now().toISO()
      }
    ]

    // Déterminer le statut global
    const hasUnhealthy = [...services, ...endpointChecks].some(
      item => item.status.status === 'unhealthy'
    )
    const hasDegraded = [...services, ...endpointChecks].some(
      item => item.status.status === 'degraded'
    )

    const status = hasUnhealthy ? 'unhealthy' : hasDegraded ? 'degraded' : 'healthy'

    return {
      status,
      timestamp: DateTime.now().toISO(),
      uptime: this.getUptime(),
      version: process.env.npm_package_version || '1.0.0',
      services,
      endpoints: endpointChecks,
      memory: this.checkMemory()
    }
  }
}
