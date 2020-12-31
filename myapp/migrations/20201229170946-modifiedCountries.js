"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "countries", // table name
        "countryId", // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
        }
      ),
      queryInterface.addColumn("countries", "population", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn("states", "stateId", {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),

      queryInterface.addColumn("states", "language", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("countries", "countryId"),
      queryInterface.removeColumn("countries", "population"),
      queryInterface.removeColumn("states", "stateId"),
      queryInterface.removeColumn("states", "language"),
    ]);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
