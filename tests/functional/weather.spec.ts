import { test } from '@japa/runner'

test.group('Weather Controller', () => {
  test('get weather by region', async ({ client }) => {
    const response = await client.get('/api/v1/weather/Réunion')

    response.assertStatus(200)
    response.assertBodyContains({
      region: 'Réunion',
      current: {
        temperature: response.body().current.temperature,
        humidity: response.body().current.humidity,
        windSpeed: response.body().current.windSpeed
      }
    })
  })

  test('get weather forecast', async ({ client }) => {
    const response = await client.get('/api/v1/weather/Réunion/forecast')

    response.assertStatus(200)
    response.assertBodyContains({
      region: 'Réunion'
    })

    // Vérifier que nous avons 7 jours de prévisions
    const body = response.body()
    if (!Array.isArray(body.daily) || body.daily.length !== 7) {
      throw new Error('Forecast should contain exactly 7 days')
    }
  })

  test('forecast contains required fields', async ({ client }) => {
    const response = await client.get('/api/v1/weather/Réunion/forecast')

    response.assertStatus(200)
    const body = response.body()
    const firstDay = body.daily[0]
    
    // Vérifier que tous les champs requis sont présents et du bon type
    if (
      typeof firstDay.date !== 'string' ||
      typeof firstDay.maxTemp !== 'number' ||
      typeof firstDay.minTemp !== 'number' ||
      typeof firstDay.condition !== 'string' ||
      typeof firstDay.precipitation !== 'number' ||
      typeof firstDay.windSpeed !== 'number'
    ) {
      throw new Error('Forecast day is missing required fields or has incorrect types')
    }
  })
})
