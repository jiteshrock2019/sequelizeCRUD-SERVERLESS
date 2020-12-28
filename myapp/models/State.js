"use strict";
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    "State",
    {
      name: DataTypes.STRING,
      population: DataTypes.INTEGER,
    },
    {}
  );
  State.associate = function (models) {
    // state belongs to country
    State.belongsTo(models.Country);
  };
  return State;
};
