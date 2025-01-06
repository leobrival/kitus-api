export const UPDATE_INTERVALS = {
  WEATHER: {
    CURRENT: 30 * 60,    // 30 minutes
    FORECAST: 3 * 3600,  // 3 heures
    ALERTS: 5 * 60,      // 5 minutes
    CYCLONE: 15 * 60,    // 15 minutes
    SEISMIC: 5 * 60      // 5 minutes
  },
  CACHE: {
    WEATHER: 15 * 60,    // 15 minutes
    FORECAST: 1 * 3600,  // 1 heure
    ALERTS: 1 * 60,      // 1 minute
    REGIONS: 24 * 3600   // 24 heures
  },
  CLEANUP: {
    ALERTS: 30 * 24 * 3600,     // 30 jours
    WEATHER_HISTORY: 7 * 24 * 3600,  // 7 jours
    LOGS: 90 * 24 * 3600        // 90 jours
  }
}

export const RATE_LIMITS = {
  PUBLIC: {
    WINDOW_MS: 15 * 60 * 1000,  // 15 minutes
    MAX_REQUESTS: 100
  },
  AUTHENTICATED: {
    WINDOW_MS: 15 * 60 * 1000,  // 15 minutes
    MAX_REQUESTS: 1000
  },
  ADMIN: {
    WINDOW_MS: 15 * 60 * 1000,  // 15 minutes
    MAX_REQUESTS: 5000
  }
}

export const PAGINATION = {
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
  DEFAULT_PAGE: 1
}

export const CACHE_KEYS = {
  WEATHER: (region: string) => `weather:${region}`,
  FORECAST: (region: string) => `forecast:${region}`,
  ALERTS: (region: string) => `alerts:${region}`,
  REGIONS: 'regions:all'
}

export const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  DATA_SOURCE_ERROR: 'DATA_SOURCE_ERROR'
}
