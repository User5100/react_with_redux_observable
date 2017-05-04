'use strict'

const Sequelize = require('sequelize')
const db = require('./db')

let Service = db.define('Service', {
  name: Sequelize.TEXT
})

module.exports = Service
