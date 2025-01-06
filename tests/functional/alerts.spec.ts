import { test } from '@japa/runner'

test.group('Alerts Controller', () => {
  test('get list of alerts', async ({ client }) => {
    const response = await client.get('/api/v1/alerts')

    response.assertStatus(200)
    response.assertBodyContains([
      {
        type: 'cyclone',
        severity: 'high',
        region: 'Réunion'
      }
    ])
  })

  test('get specific alert', async ({ client }) => {
    const response = await client.get('/api/v1/alerts/1')

    response.assertStatus(200)
    response.assertBodyContains({
      id: 1,
      type: 'cyclone',
      severity: 'high'
    })
  })

  test('get alerts by region', async ({ client }) => {
    const response = await client.get('/api/v1/alerts/region/Réunion')

    response.assertStatus(200)
    response.assertBodyContains([
      {
        type: 'cyclone',
        severity: 'high',
        region: 'Réunion'
      }
    ])
  })
})
