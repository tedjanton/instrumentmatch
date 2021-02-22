'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Families', [
      { family: "woodwind" },
      { family: "brass" },
      { family: "string" },
      { family: "percussion" },
      { family: "world" },
      { family: "other" }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Families', null, {});
  }
};
