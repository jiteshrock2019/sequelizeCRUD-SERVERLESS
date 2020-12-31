"use strict";
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: DataTypes.STRING,
      countryId: {
        type: DataTypes.INTEGER,
        allowedNull: false,
      },

      population: {
        type: DataTypes.INTEGER,
        allowedNull: false,
      },
    },
    {}
  );
  Country.associate = function (models) {
    // country hasMany states
    Country.hasMany(models.State, {
      foreignKey: "countryId",
      as: "states",
    });
  };
  return Country;
};
