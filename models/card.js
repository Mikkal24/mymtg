"use strict";
module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define(
    "Card",
    {
      name: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()")
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()")
      }
    },
    {}
  );
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};
