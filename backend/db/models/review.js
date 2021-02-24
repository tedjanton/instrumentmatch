'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
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
    review: {
      type: DataTypes.TEXT
    },
    rating: {
      type: DataTypes.INTEGER
    },
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Instrument, { foeignKey: "instrumentId" });
  };
  return Review;
};
