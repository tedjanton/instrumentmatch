'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rental = sequelize.define('Rental', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    instrumentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Instruments" }
    },
    rentalStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rentalEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  }, {});
  Rental.associate = function(models) {
    Rental.belongsTo(models.User, { foreignKey: "userId" });
    Rental.belongsTo(models.Instrument, { foreignKey: "instrumentId" });
    Rental.hasMany(models.Image, { foreignKey: "instrumentId" });
  };
  return Rental;
};
