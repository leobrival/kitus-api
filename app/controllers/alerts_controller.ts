import { HttpContext } from '@adonisjs/core/http'

export default class AlertsController {
  /**
   * Liste toutes les alertes
   */
  async index({ response }: HttpContext) {
    // Mock data
    const alerts = [
      {
        id: 1,
        type: 'cyclone',
        severity: 'high',
        region: 'Réunion',
        title: 'Cyclone Tropical Intense',
        description: 'Un cyclone tropical intense approche de La Réunion',
        coordinates: {
          lat: -21.115141,
          lon: 55.536384
        },
        createdAt: new Date('2025-01-06T10:00:00Z'),
        updatedAt: new Date('2025-01-06T10:00:00Z')
      },
      {
        id: 2,
        type: 'tsunami',
        severity: 'medium',
        region: 'Polynésie',
        title: 'Alerte Tsunami',
        description: 'Risque de tsunami suite à un séisme',
        coordinates: {
          lat: -17.679742,
          lon: -149.406843
        },
        createdAt: new Date('2025-01-06T11:00:00Z'),
        updatedAt: new Date('2025-01-06T11:00:00Z')
      }
    ]

    return response.json(alerts)
  }

  /**
   * Récupère une alerte spécifique
   */
  async show({ params, response }: HttpContext) {
    const alert = {
      id: parseInt(params.id),
      type: 'cyclone',
      severity: 'high',
      region: 'Réunion',
      title: 'Cyclone Tropical Intense',
      description: 'Un cyclone tropical intense approche de La Réunion',
      coordinates: {
        lat: -21.115141,
        lon: 55.536384
      },
      createdAt: new Date('2025-01-06T10:00:00Z'),
      updatedAt: new Date('2025-01-06T10:00:00Z')
    }

    return response.json(alert)
  }

  /**
   * Récupère les alertes par région
   */
  async byRegion({ params, response }: HttpContext) {
    const alerts = [
      {
        id: 1,
        type: 'cyclone',
        severity: 'high',
        region: params.region,
        title: 'Cyclone Tropical Intense',
        description: `Un cyclone tropical intense approche de ${params.region}`,
        coordinates: {
          lat: -21.115141,
          lon: 55.536384
        },
        createdAt: new Date('2025-01-06T10:00:00Z'),
        updatedAt: new Date('2025-01-06T10:00:00Z')
      }
    ]

    return response.json(alerts)
  }
}
