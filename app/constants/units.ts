export interface UnitSystem {
  id: string
  name: string
  symbol: string
  conversion?: (value: number) => number
  format?: (value: number) => string
}

export interface UnitCategory {
  defaultUnit: string
  units: Record<string, UnitSystem>
}

export const UNITS: Record<string, UnitCategory> = {
  TEMPERATURE: {
    defaultUnit: 'CELSIUS',
    units: {
      CELSIUS: {
        id: 'celsius',
        name: 'Celsius',
        symbol: '°C',
        format: (value: number) => `${value.toFixed(1)}°C`
      },
      FAHRENHEIT: {
        id: 'fahrenheit',
        name: 'Fahrenheit',
        symbol: '°F',
        conversion: (celsius: number) => (celsius * 9/5) + 32,
        format: (value: number) => `${value.toFixed(1)}°F`
      }
    }
  },
  WIND_SPEED: {
    defaultUnit: 'KMH',
    units: {
      KMH: {
        id: 'kmh',
        name: 'Kilomètres par heure',
        symbol: 'km/h',
        format: (value: number) => `${value.toFixed(1)} km/h`
      },
      MS: {
        id: 'ms',
        name: 'Mètres par seconde',
        symbol: 'm/s',
        conversion: (kmh: number) => kmh / 3.6,
        format: (value: number) => `${value.toFixed(1)} m/s`
      },
      KNOTS: {
        id: 'knots',
        name: 'Nœuds',
        symbol: 'kts',
        conversion: (kmh: number) => kmh / 1.852,
        format: (value: number) => `${value.toFixed(1)} kts`
      }
    }
  },
  PRESSURE: {
    defaultUnit: 'HPA',
    units: {
      HPA: {
        id: 'hpa',
        name: 'Hectopascal',
        symbol: 'hPa',
        format: (value: number) => `${value.toFixed(0)} hPa`
      },
      MB: {
        id: 'mb',
        name: 'Millibar',
        symbol: 'mb',
        conversion: (hpa: number) => hpa,
        format: (value: number) => `${value.toFixed(0)} mb`
      }
    }
  },
  PRECIPITATION: {
    defaultUnit: 'MM',
    units: {
      MM: {
        id: 'mm',
        name: 'Millimètres',
        symbol: 'mm',
        format: (value: number) => `${value.toFixed(1)} mm`
      },
      INCHES: {
        id: 'in',
        name: 'Pouces',
        symbol: 'in',
        conversion: (mm: number) => mm / 25.4,
        format: (value: number) => `${value.toFixed(2)} in`
      }
    }
  },
  DISTANCE: {
    defaultUnit: 'KM',
    units: {
      KM: {
        id: 'km',
        name: 'Kilomètres',
        symbol: 'km',
        format: (value: number) => `${value.toFixed(0)} km`
      },
      MILES: {
        id: 'mi',
        name: 'Miles',
        symbol: 'mi',
        conversion: (km: number) => km * 0.621371,
        format: (value: number) => `${value.toFixed(1)} mi`
      }
    }
  }
}
