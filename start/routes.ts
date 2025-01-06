/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const apiPrefix = '/api/v1'

// Route pour le health check UI
router.get('/', '#controllers/health_controller.index')

// Route pour le health check JSON
router.get('/health', '#controllers/health_controller.check')

// Routes d'authentification
router
  .group(() => {
    router.post('/auth/login', '#controllers/auth_controller.login')
    router.post('/auth/register', '#controllers/auth_controller.register')
    router.post('/auth/refresh', '#controllers/auth_controller.refresh').use(middleware.auth())
    router.post('/auth/logout', '#controllers/auth_controller.logout').use(middleware.auth())
    router.get('/auth/me', '#controllers/auth_controller.me').use(middleware.auth())
  })
  .prefix(apiPrefix)

// Routes pour les alertes
router
  .group(() => {
    router.get('/alerts', '#controllers/alerts_controller.index')
    router.get('/alerts/:id', '#controllers/alerts_controller.show')
    router.get('/alerts/region/:region', '#controllers/alerts_controller.byRegion')
  })
  .prefix(apiPrefix)
  .use(middleware.auth()) // Protection des routes d'alertes

// Routes pour la météo
router
  .group(() => {
    router.get('/weather/:region', '#controllers/weather_controller.byRegion')
    router.get('/weather/:region/forecast', '#controllers/weather_controller.forecast')
  })
  .prefix(apiPrefix)
  .use(middleware.auth()) // Protection des routes météo

// Routes CRUD pour les utilisateurs
router
  .group(() => {
    router.get('/users', '#controllers/users_controller.index')
    router.post('/users', '#controllers/users_controller.store')
    router.get('/users/:id', '#controllers/users_controller.show')
    router.put('/users/:id', '#controllers/users_controller.update')
    router.delete('/users/:id', '#controllers/users_controller.destroy')
  })
  .prefix(apiPrefix)
