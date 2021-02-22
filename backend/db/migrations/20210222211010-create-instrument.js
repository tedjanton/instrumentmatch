'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Instruments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Owners" }
      },
      familyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Families" }
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      manufacturer: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      lastServiced: {
        type: Sequelize.ENUM(["< 6m", "6m - 1yr", "1yr - 2yrs", "> 2yrs"]),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT
      },
      pricePerDay: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
      },
      address_1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address_2: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zip: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Instruments');
  }
};
