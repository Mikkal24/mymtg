"use strict";
module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define(
    "Card",
    {
      name: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: "1970-01-01"
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: "1970-01-01"
      }
    },
    {}
  );
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};
