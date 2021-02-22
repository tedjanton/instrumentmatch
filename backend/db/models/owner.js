'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    userId: {
      type: DataType.INTEGER,
      references: { model: "Users" },
      allowNull: false
    }
  }, {});
  Owner.associate = function(models) {
    // associations can be defined here
  };
  return Owner;
};
