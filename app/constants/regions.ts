export interface Region {
  code: string
  name: string
  latitude: number
  longitude: number
  timezone: string
  naturalRisks: string[]
}

export const OVERSEAS_REGIONS: Record<string, Region> = {
  GUADELOUPE: {
    code: '971',
    name: 'Guadeloupe',
    latitude: 16.265,
    longitude: -61.551,
    timezone: 'America/Guadeloupe',
    naturalRisks: ['cyclone', 'seisme', 'tsunami', 'volcan', 'inondation']
  },
  MARTINIQUE: {
    code: '972',
    name: 'Martinique',
    latitude: 14.641,
    longitude: -61.024,
    timezone: 'America/Martinique',
    naturalRisks: ['cyclone', 'seisme', 'tsunami', 'volcan', 'inondation']
  },
  GUYANE: {
    code: '973',
    name: 'Guyane',
    latitude: 3.933,
    longitude: -53.125,
    timezone: 'America/Cayenne',
    naturalRisks: ['inondation', 'submersion']
  },
  REUNION: {
    code: '974',
    name: 'La Réunion',
    latitude: -21.115,
    longitude: 55.536,
    timezone: 'Indian/Reunion',
    naturalRisks: ['cyclone', 'volcan', 'tsunami', 'inondation']
  },
  MAYOTTE: {
    code: '976',
    name: 'Mayotte',
    latitude: -12.827,
    longitude: 45.166,
    timezone: 'Indian/Mayotte',
    naturalRisks: ['cyclone', 'seisme', 'tsunami', 'submersion']
  },
  POLYNESIE: {
    code: '987',
    name: 'Polynésie française',
    latitude: -17.679,
    longitude: -149.406,
    timezone: 'Pacific/Tahiti',
    naturalRisks: ['cyclone', 'tsunami', 'submersion']
  },
  NOUVELLE_CALEDONIE: {
    code: '988',
    name: 'Nouvelle-Calédonie',
    latitude: -20.904,
    longitude: 165.618,
    timezone: 'Pacific/Noumea',
    naturalRisks: ['cyclone', 'tsunami', 'submersion']
  },
  SAINT_PIERRE_MIQUELON: {
    code: '975',
    name: 'Saint-Pierre-et-Miquelon',
    latitude: 46.883,
    longitude: -56.315,
    timezone: 'America/Miquelon',
    naturalRisks: ['tempete', 'submersion']
  },
  SAINT_MARTIN: {
    code: '978',
    name: 'Saint-Martin',
    latitude: 18.067,
    longitude: -63.082,
    timezone: 'America/St_Barthelemy',
    naturalRisks: ['cyclone', 'seisme', 'tsunami', 'submersion']
  },
  SAINT_BARTHELEMY: {
    code: '977',
    name: 'Saint-Barthélemy',
    latitude: 17.897,
    longitude: -62.849,
    timezone: 'America/St_Barthelemy',
    naturalRisks: ['cyclone', 'seisme', 'tsunami', 'submersion']
  }
}
