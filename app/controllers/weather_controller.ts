import { HttpContext } from '@adonisjs/core/http'

export default class WeatherController {
  /**
   * Récupère les données météo pour une région spécifique
   */
  async byRegion({ params, response }: HttpContext) {
    // Mock data
    const weather = {
      region: params.region,
      current: {
        temperature: 28,
        humidity: 75,
        windSpeed: 15,
        windDirection: 'NE',
        pressure: 1015,
        condition: 'partly cloudy',
        updatedAt: new Date('2025-01-06T19:00:00Z')
      },
      forecast: [
        {
          date: '2025-01-07',
          maxTemp: 29,
          minTemp: 24,
          condition: 'scattered thunderstorms',
          precipitation: 60,
          windSpeed: 20
        },
        {
          date: '2025-01-08',
          maxTemp: 30,
          minTemp: 25,
          condition: 'sunny',
          precipitation: 10,
          windSpeed: 12
        },
        {
          date: '2025-01-09',
          maxTemp: 28,
          minTemp: 23,
          condition: 'rain',
          precipitation: 80,
          windSpeed: 25
        }
      ],
      warnings: [
        {
          type: 'wind',
          severity: 'moderate',
          message: 'Vents forts attendus'
        }
      ]
    }

    return response.json(weather)
  }

  /**
   * Récupère les prévisions météo détaillées
   */
  async forecast({ params, response }: HttpContext) {
    // Mock data
    const forecast = {
      region: params.region,
      daily: Array.from({ length: 7 }, (_, i) => ({
        date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        maxTemp: 25 + Math.floor(Math.random() * 5),
        minTemp: 20 + Math.floor(Math.random() * 5),
        condition: ['sunny', 'partly cloudy', 'cloudy', 'rain'][Math.floor(Math.random() * 4)],
        precipitation: Math.floor(Math.random() * 100),
        windSpeed: 10 + Math.floor(Math.random() * 20)
      })),
      updatedAt: new Date()
    }

    return response.json(forecast)
  }
}
