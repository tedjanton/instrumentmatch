'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    userId: {
      type: DataTypes.INTEGER,
      references: { model: "Users" },
      allowNull: false
    }
  }, {});
  Owner.associate = function(models) {
    Owner.belongsTo(models.User, { foreignKey: "userId" });
    Owner.hasMany(models.Instrument, { foreignKey: "ownerId" })
  };
  return Owner;
};
