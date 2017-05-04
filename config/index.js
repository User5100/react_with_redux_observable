'use strict'

let config = {}
const APP_ID = process.env.APPLICATION_ID
const APP_KEY = process.env.APPLICATION_KEY

// TFL API Services
config.tflUrl = `https://api.tfl.gov.uk/Line/Meta/Severity?app_key=${APP_KEY}&app_id=${APP_ID}`
config.tflCarParkOccupancy = `https://api.tfl.gov.uk/Occupancy/CarPark?app_key=${APP_KEY}&app_id=${APP_ID}`
config.tflDisruptedStreets = `https://api.tfl.gov.uk/Road/all/Street/Disruption?startDate=01%2F05%2F2017&endDate=01%2F05%2F2017&app_key=${APP_KEY}&app_id=${APP_ID}`
config.jsonServerUrl = 'http://localhost:3000/messages'
config.baseUrl = 'http://localhost:3000/'

// HTTP port for Express
config.port = process.env.PORT || 3000

// Options for Sequelize ORM connection - overrides in production and test
// environments
config.databaseUrl = 'postgres://localhost:5432/tflperf'
config.databaseOptions = {
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
}

// ----------------------------------------------------
// Assign values based on current execution environment
// ----------------------------------------------------
let environmentSettings = {}
switch (process.env.NODE_ENV) {
  case 'production': environmentSettings = require('./production'); break
  case 'test': environmentSettings = require('./test'); break
  default: environmentSettings = require('./development'); break
}
config = Object.assign(config, environmentSettings)

module.exports = config
