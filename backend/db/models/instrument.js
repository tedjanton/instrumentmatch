'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instrument = sequelize.define('Instrument', {
    ownerId: {
      type: DataType.INTEGER,
      allowNull: false,
      references: { model: "Owners" }
    },
    familyId: {
      type: DataType.INTEGER,
      allowNull: false,
      references: { model: "Families" }
    },
    name: {
      type: DataType.STRING(100),
      allowNull: false,
    },
    manufacturer: {
      type: DataType.STRING(50),
      allowNull: false,
    },
    lastServiced: {
      type: DataType.ENUM(["< 6m", "6m - 1yr", "1yr - 2yrs", "> 2yrs"]),
      allowNull: false,
    },
    description: {
      type: DataType.TEXT
    },
    pricePerDay: {
      type: DataType.DECIMAL(5, 2),
      allowNull: false,
    },
    address_1: {
      type: DataType.STRING,
      allowNull: false,
    },
    address_2: {
      type: DataType.STRING
    },
    city: {
      type: DataType.STRING,
      allowNull: false,
    },
    state: {
      type: DataType.STRING,
      allowNull: false,
    },
    zip: {
      type: DataType.INTEGER,
      allowNull: false,
    },
  }, {});
  Instrument.associate = function(models) {
    // associations can be defined here
  };
  return Instrument;
};
