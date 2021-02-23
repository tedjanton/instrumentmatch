'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      { instrumentId: 1, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/piccolo1.jpg"},
      { instrumentId: 1, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/piccolo2.jpg"},
      { instrumentId: 1, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/piccolo3.jpg"},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
