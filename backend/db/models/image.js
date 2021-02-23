'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    instrumentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Instruments" }
    },
    imgSrc: {
      type: DataTypes.TEXT
    },
  }, {});

  Image.add = async function({ instrumentId }) {
    const image = await Image.create({ instrumentId })
    return await Image.findByPk(image.id);
  }

  Image.associate = function(models) {
    Image.belongsTo(models.Instrument, { foreignKey: "instrumentId" })
  };
  return Image;
};
