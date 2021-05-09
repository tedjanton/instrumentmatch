'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      { instrumentId: 4, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/marimba2.jpeg"},
      { instrumentId: 4, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/marimba3.jpeg"},
      { instrumentId: 5, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/bansuri2.jpeg"},
      { instrumentId: 5, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/bansuri3.jpeg"},
      { instrumentId: 7, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/trombone3.jpeg"},
      { instrumentId: 8, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/cello3.jpeg"},
      { instrumentId: 9, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/triangle2.jpeg"},
      { instrumentId: 9, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/triangle3.jpeg"},
      { instrumentId: 12, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/englishhorn3.jpeg"},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
