import { test } from '@japa/runner'
import { UserFactory } from '#database/factories/user_factory'
import User from '#models/user'

test.group('Users', (group) => {
  // Nettoyer la base de données après chaque test
  group.each.setup(async () => {
    await User.query().delete()
  })

  test('can create a new user', async ({ client }) => {
    const userData = {
      email: 'test@example.com',
      password: 'password123',
      fullName: 'Test User'
    }

    const response = await client.post('/api/v1/users').json(userData)

    response.assertStatus(201)
    response.assertBodyContains({
      email: userData.email,
      fullName: userData.fullName
    })
  })

  test('cannot create user with duplicate email', async ({ client }) => {
    const userData = {
      email: 'test@example.com',
      password: 'password123',
      fullName: 'Test User'
    }

    await client.post('/api/v1/users').json(userData)
    const response = await client.post('/api/v1/users').json(userData)

    response.assertStatus(400)
  })

  test('can get list of users', async ({ client }) => {
    await User.create({
      email: 'test@example.com',
      password: 'password123',
      fullName: 'Test User'
    })

    const response = await client.get('/api/v1/users')

    response.assertStatus(200)
    response.assertBodyContains([{
      email: 'test@example.com',
      fullName: 'Test User'
    }])
  })

  test('can get single user', async ({ client }) => {
    const user = await User.create({
      email: 'test@example.com',
      password: 'password123',
      fullName: 'Test User'
    })

    const response = await client.get(`/api/v1/users/${user.id}`)

    response.assertStatus(200)
    response.assertBodyContains({
      email: 'test@example.com',
      fullName: 'Test User'
    })
  })

  test('can update user', async ({ client }) => {
    const user = await User.create({
      email: 'test@example.com',
      password: 'password123',
      fullName: 'Test User'
    })

    const response = await client.put(`/api/v1/users/${user.id}`).json({
      fullName: 'Updated Name'
    })

    response.assertStatus(200)
    response.assertBodyContains({
      fullName: 'Updated Name'
    })
  })

  test('can delete user', async ({ client }) => {
    const user = await User.create({
      email: 'test@example.com',
      password: 'password123',
      fullName: 'Test User'
    })

    const response = await client.delete(`/api/v1/users/${user.id}`)

    response.assertStatus(204)
    const userExists = await User.find(user.id)
    if (userExists) {
      throw new Error('User should have been deleted')
    }
  })
})
