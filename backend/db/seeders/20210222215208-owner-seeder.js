'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Owners', [
      { userId: 1 },
      { userId: 2 },
      { userId: 3 },
      { userId: 4 },
      { userId: 5 },
      { userId: 6 },
      { userId: 7 },
      { userId: 8 },
      { userId: 9 },
      { userId: 10 }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Owners', null, {});
  }
};
