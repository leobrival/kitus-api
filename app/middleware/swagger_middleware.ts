import { swaggerSpec } from '#config/swagger'
import swaggerUi from 'swagger-ui-express'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class SwaggerMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (ctx.request.url().startsWith('/api-docs')) {
      return swaggerUi.serve(ctx.request.request, ctx.response.response)
    }
    await next()
  }
}
