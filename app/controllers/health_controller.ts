import { HttpContext } from '@adonisjs/core/http'
import HealthCheckService from '#services/health_check_service'

export default class HealthController {
  /**
   * Affiche un tableau de bord de santé simple sur la page d'accueil
   */
  public async index({ view }: HttpContext) {
    const health = await HealthCheckService.check()
    return view.render('health/index', { health })
  }

  /**
   * Retourne les données de santé au format JSON
   */
  public async check({ response }: HttpContext) {
    const health = await HealthCheckService.check()
    
    // Définir le code de statut HTTP en fonction de l'état de santé
    const statusCode = health.status === 'healthy' ? 200 : 
                      health.status === 'degraded' ? 200 : 503

    return response.status(statusCode).json(health)
  }
}
