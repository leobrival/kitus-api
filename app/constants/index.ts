export * from './alert_levels'
export * from './data_sources'
export * from './natural_risks'
export * from './notifications'
export * from './regions'
export * from './system_config'
export * from './units'
export * from './weather_conditions'

// Version de l'API
export const API_VERSION = 'v1'

// Environnements supportés
export const ENVIRONMENTS = {
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production'
}

// Formats de date supportés
export const DATE_FORMATS = {
  ISO: 'YYYY-MM-DDTHH:mm:ssZ',
  HUMAN: 'DD/MM/YYYY HH:mm',
  DATE_ONLY: 'YYYY-MM-DD',
  TIME_ONLY: 'HH:mm:ss'
}

// Langues supportées
export const SUPPORTED_LANGUAGES = {
  FR: {
    code: 'fr',
    name: 'Français',
    default: true
  },
  EN: {
    code: 'en',
    name: 'English',
    default: false
  }
}
