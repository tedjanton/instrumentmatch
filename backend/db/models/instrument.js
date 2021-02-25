'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instrument = sequelize.define('Instrument', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Owners" }
    },
    familyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Families" }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastServiced: {
      type: DataTypes.ENUM(["less than 6 months", "between 6 months and a year", "between 1 and 2 years", "longer than 2 years"]),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT
    },
    pricePerDay: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    address_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lat: {
      type: DataTypes.NUMERIC(7, 4),
      allowNull: false
    },
    lng: {
      type: DataTypes.NUMERIC(7, 4),
      allowNull: false
    },
  }, {});
  Instrument.associate = function(models) {
    Instrument.belongsTo(models.Owner, { foreignKey: "ownerId" });
    Instrument.belongsTo(models.Family, { foreignKey: "familyId"})
    Instrument.hasMany(models.Image, { foreignKey: "instrumentId" });
    Instrument.hasMany(models.Rental, { foreignKey: "instrumentId" });
    Instrument.hasMany(models.Review, { foreignKey: "instrumentId" });

    const columnMapping = {
      through: "Owner",
      foreignKey: "ownerId",
      otherKey: "userId"
    }

    Instrument.belongsTo(models.User, columnMapping);
  };
  return Instrument;
};
