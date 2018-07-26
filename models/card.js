'use strict';
module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define('Card', {}, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};