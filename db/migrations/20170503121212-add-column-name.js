'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Services', // name of table
      'name', // name of attribute
      Sequelize.TEXT
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Services', // name of table
      'name' // name of column
    )
  }
}
