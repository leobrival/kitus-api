import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  /**
   * Login user and create access token
   */
  async login({ request, response, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.verifyCredentials(email, password)
      const token = await auth.use('api').generate(user, {
        name: 'api_token',
        expiresIn: '7 days'
      })

      return response.json({
        type: 'bearer',
        token: token.value,
        expires_at: token.expiresAt
      })
    } catch (error) {
      return response.unauthorized('Invalid credentials')
    }
  }

  /**
   * Register a new user
   */
  async register({ request, response }: HttpContext) {
    const data = request.only(['email', 'password', 'name'])

    try {
      const user = await User.create({
        email: data.email,
        password: await hash.make(data.password),
        name: data.name
      })

      return response.created({ 
        message: 'User created successfully',
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      })
    } catch (error) {
      return response.badRequest('Unable to create user')
    }
  }

  /**
   * Get current user profile
   */
  async me({ auth, response }: HttpContext) {
    const user = auth.user!
    return response.json({
      id: user.id,
      email: user.email,
      name: user.name
    })
  }

  /**
   * Logout user and revoke token
   */
  async logout({ auth, response }: HttpContext) {
    await auth.use('api').revoke()
    return response.json({ message: 'Logged out successfully' })
  }

  /**
   * Refresh access token
   */
  async refresh({ auth, response }: HttpContext) {
    const user = auth.user!
    const oldToken = auth.use('api').token!

    // Revoke old token
    await oldToken.revoke()

    // Generate new token
    const token = await auth.use('api').generate(user, {
      name: 'api_token',
      expiresIn: '7 days'
    })

    return response.json({
      type: 'bearer',
      token: token.value,
      expires_at: token.expiresAt
    })
  }
}
