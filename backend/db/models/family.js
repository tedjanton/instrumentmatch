'use strict';
module.exports = (sequelize, DataTypes) => {
  const Family = sequelize.define('Family', {
    family: {
      type: DataTypes.ENUM({
        values: ["woodwind", "brass", "string", "percussion", "world", "other"]
      }),
      allowNull: false
    },
  }, {});
  Family.associate = function(models) {
    Family.hasMany(models.Instrument, { foreignKey: "familyId"})
  };
  return Family;
};
