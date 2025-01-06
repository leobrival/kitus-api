import env from '#start/env'
import { defineConfig } from '@adonisjs/core/http'

export default defineConfig({
  appKey: env.get('APP_KEY'),

  /*
  |--------------------------------------------------------------------------
  | Http server configuration
  |--------------------------------------------------------------------------
  |
  | The configuration for the HTTP(s) server
  |
  */
  http: {
    allowMethodSpoofing: false,
    subdomainOffset: 2,
    generateRequestId: true,
    trustProxy: env.get('NODE_ENV') === 'production',
    etag: true,
    jsonpCallbackName: 'callback',
  },

  /*
  |--------------------------------------------------------------------------
  | Trusted hosts
  |--------------------------------------------------------------------------
  |
  | An array of hostnames to trust when redirecting back to the website. By
  | default, all hostnames are trusted.
  |
  */
  trustHosts: () => true,

  /*
  |--------------------------------------------------------------------------
  | Commands
  |--------------------------------------------------------------------------
  |
  | List of ace commands to register from packages and the application
  |
  */
  commands: [() => import('@adonisjs/core/commands')],

  /*
  |--------------------------------------------------------------------------
  | Providers
  |--------------------------------------------------------------------------
  |
  | List of providers to register for the application
  |
  */
  providers: [
    () => import('@adonisjs/core/providers/app_provider'),
    () => import('@adonisjs/core/providers/hash_provider'),
    () => import('@adonisjs/core/providers/repl_provider'),
    () => import('@adonisjs/core/providers/vinejs_provider'),
    () => import('@adonisjs/cors/cors_provider'),
    () => import('@adonisjs/lucid/database_provider'),
  ],
})
