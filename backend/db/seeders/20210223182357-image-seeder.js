'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      { instrumentId: 2, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/trumpet1.jpg"},
      { instrumentId: 2, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/trumpet2.jpg"},
      { instrumentId: 2, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/trumpet3.jpg"},
      { instrumentId: 3, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/violin1.jpg"},
      { instrumentId: 3, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/violin2.jpg"},
      { instrumentId: 3, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/violin3.jpg"},
      { instrumentId: 4, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/marimba1.jpg"},
      { instrumentId: 5, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/bansuri1.jpg"},
      { instrumentId: 6, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/bassclarinet1.jpg"},
      { instrumentId: 6, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/bassclarinet2.jpg"},
      { instrumentId: 6, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/bassclarinet3.jpg"},
      { instrumentId: 7, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/trombone1.jpg"},
      { instrumentId: 7, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/trombone2.jpg"},
      { instrumentId: 8, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/cello1.jpg"},
      { instrumentId: 8, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/cello2.jpg"},
      { instrumentId: 9, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/triangle1.jpg"},
      { instrumentId: 10, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/erhu1.jpg"},
      { instrumentId: 10, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/erhu2.jpg"},
      { instrumentId: 10, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/erhu3.jpg"},
      { instrumentId: 11, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/altoflute1.jpg"},
      { instrumentId: 11, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/altoflute2.jpg"},
      { instrumentId: 11, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/altoflute3.jpg"},
      { instrumentId: 12, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/englishhorn1.jpg"},
      { instrumentId: 12, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/englishhorn2.jpg"},
      { instrumentId: 13, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/tenorsax1.jpg"},
      { instrumentId: 13, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/tenorsax2.jpg"},
      { instrumentId: 13, imgSrc: "https://instrumentmatch.s3.us-east-2.amazonaws.com/tenorsax3.jpg"},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
