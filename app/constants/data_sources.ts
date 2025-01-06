export interface DataSource {
  name: string
  baseUrl: string
  regions: string[]
  updateInterval: number // en secondes
  priority: number // 1 = source principale, 2 = source secondaire, etc.
  capabilities: string[]
}

export const DATA_SOURCES: Record<string, DataSource> = {
  METEO_FRANCE: {
    name: 'Météo France',
    baseUrl: 'https://api.meteo.fr',
    regions: ['REUNION', 'MARTINIQUE', 'GUADELOUPE', 'GUYANE', 'MAYOTTE', 'SAINT_PIERRE_MIQUELON', 'SAINT_MARTIN', 'SAINT_BARTHELEMY'],
    updateInterval: 900, // 15 minutes
    priority: 1,
    capabilities: ['weather', 'alerts', 'forecast', 'cyclone_tracking']
  },
  NOAA: {
    name: 'National Oceanic and Atmospheric Administration',
    baseUrl: 'https://api.noaa.gov',
    regions: ['POLYNESIE', 'NOUVELLE_CALEDONIE'],
    updateInterval: 1800, // 30 minutes
    priority: 1,
    capabilities: ['weather', 'alerts', 'forecast', 'tsunami_warnings']
  },
  USGS: {
    name: 'United States Geological Survey',
    baseUrl: 'https://earthquake.usgs.gov/fdsnws/event/1',
    regions: ['ALL'],
    updateInterval: 300, // 5 minutes
    priority: 1,
    capabilities: ['seismic_activity', 'earthquake_alerts']
  },
  METEO_NC: {
    name: 'Météo Nouvelle-Calédonie',
    baseUrl: 'https://api.meteo.nc',
    regions: ['NOUVELLE_CALEDONIE'],
    updateInterval: 1800, // 30 minutes
    priority: 2,
    capabilities: ['weather', 'alerts', 'forecast']
  },
  METEO_PF: {
    name: 'Météo Polynésie Française',
    baseUrl: 'https://api.meteo.pf',
    regions: ['POLYNESIE'],
    updateInterval: 1800, // 30 minutes
    priority: 2,
    capabilities: ['weather', 'alerts', 'forecast']
  }
}
