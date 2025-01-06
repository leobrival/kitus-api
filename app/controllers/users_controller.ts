import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */
export default class UsersController {
  /**
   * @swagger
   * /users:
   *   get:
   *     tags: [Users]
   *     summary: Get all users
   *     responses:
   *       200:
   *         description: List of users
   */
  async index({ response }: HttpContext) {
    const users = await User.all()
    return response.ok(users)
  }

  /**
   * @swagger
   * /users:
   *   post:
   *     tags: [Users]
   *     summary: Create a new user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *               - fullName
   *             properties:
   *               email:
   *                 type: string
   *                 format: email
   *               password:
   *                 type: string
   *                 format: password
   *               fullName:
   *                 type: string
   *     responses:
   *       201:
   *         description: User created successfully
   *       400:
   *         description: Bad request
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['email', 'password', 'fullName'])
    
    try {
      const user = await User.create(data)
      return response.created(user)
    } catch (error) {
      return response.badRequest({
        message: 'Une erreur est survenue lors de la création de l\'utilisateur',
        error: error.message
      })
    }
  }

  /**
   * @swagger
   * /users/{id}:
   *   get:
   *     tags: [Users]
   *     summary: Get a user by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: User found
   *       404:
   *         description: User not found
   */
  async show({ params, response }: HttpContext) {
    const user = await User.find(params.id)
    
    if (!user) {
      return response.notFound({ message: 'Utilisateur non trouvé' })
    }
    
    return response.ok(user)
  }

  /**
   * @swagger
   * /users/{id}:
   *   put:
   *     tags: [Users]
   *     summary: Update a user
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 format: email
   *               password:
   *                 type: string
   *               fullName:
   *                 type: string
   *     responses:
   *       200:
   *         description: User updated successfully
   *       404:
   *         description: User not found
   */
  async update({ params, request, response }: HttpContext) {
    const user = await User.find(params.id)
    
    if (!user) {
      return response.notFound({ message: 'Utilisateur non trouvé' })
    }
    
    const data = request.only(['email', 'password', 'fullName'])
    user.merge(data)
    await user.save()
    
    return response.ok(user)
  }

  /**
   * @swagger
   * /users/{id}:
   *   delete:
   *     tags: [Users]
   *     summary: Delete a user
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       204:
   *         description: User deleted successfully
   *       404:
   *         description: User not found
   */
  async destroy({ params, response }: HttpContext) {
    const user = await User.find(params.id)
    
    if (!user) {
      return response.notFound({ message: 'Utilisateur non trouvé' })
    }
    
    await user.delete()
    return response.noContent()
  }
}