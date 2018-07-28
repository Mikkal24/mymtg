"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      rank: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
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
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Card, {
      as: "Cards"
    });
  };
  return User;
};
