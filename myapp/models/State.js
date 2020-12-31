"use strict";

const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    "State",
    {
      name: DataTypes.STRING,
      population: DataTypes.INTEGER,
      stateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      language: {
        type: Sequelize.STRING,
        allowedNull: false,
      },
      countryId: {
        type: Sequelize.INTEGER,
      },
    },
    {}
  );
  State.associate = function (models) {
    // state belongs to country
    State.belongsTo(models.Country, {
      foreignKey: 'country_id',
      as: 'country'
    });
  };
  return State;
};
