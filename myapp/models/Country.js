'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING,
    cotinent: DataTypes.STRING
  }, {});
  Country.associate = function(models) {
    // country hasMany states
    Country.hasMany(models.State)
  };
  return Country;
};0