export interface WeatherCondition {
  id: string
  name: string
  icon: string
  category: string
  risk_level: number
}

export const WEATHER_CONDITIONS: Record<string, WeatherCondition> = {
  CLEAR_SKY: {
    id: 'clear_sky',
    name: 'Ciel dégagé',
    icon: 'sun',
    category: 'clear',
    risk_level: 0
  },
  PARTLY_CLOUDY: {
    id: 'partly_cloudy',
    name: 'Partiellement nuageux',
    icon: 'cloud-sun',
    category: 'clouds',
    risk_level: 0
  },
  CLOUDY: {
    id: 'cloudy',
    name: 'Nuageux',
    icon: 'cloud',
    category: 'clouds',
    risk_level: 1
  },
  LIGHT_RAIN: {
    id: 'light_rain',
    name: 'Pluie légère',
    icon: 'cloud-rain',
    category: 'rain',
    risk_level: 1
  },
  HEAVY_RAIN: {
    id: 'heavy_rain',
    name: 'Pluie forte',
    icon: 'cloud-showers-heavy',
    category: 'rain',
    risk_level: 2
  },
  THUNDERSTORM: {
    id: 'thunderstorm',
    name: 'Orage',
    icon: 'bolt',
    category: 'thunderstorm',
    risk_level: 3
  },
  TROPICAL_DEPRESSION: {
    id: 'tropical_depression',
    name: 'Dépression tropicale',
    icon: 'hurricane',
    category: 'cyclone',
    risk_level: 3
  },
  TROPICAL_STORM: {
    id: 'tropical_storm',
    name: 'Tempête tropicale',
    icon: 'hurricane',
    category: 'cyclone',
    risk_level: 4
  },
  HURRICANE: {
    id: 'hurricane',
    name: 'Cyclone',
    icon: 'hurricane',
    category: 'cyclone',
    risk_level: 5
  }
}
