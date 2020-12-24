'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    name: DataTypes.STRING
  }, {});
  Shop.associate = function(models) {
    // Shop hasMany Coffees
    Shop.hasMany(models.Coffee);
  };
  return Shop;
};