'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rentals', [
      { userId: 1, instrumentId: 2, rentalStartDate: "2021-03-15", rentalEndDate: "2021-03-20" },
      { userId: 2, instrumentId: 3, rentalStartDate: "2021-03-17", rentalEndDate: "2021-03-23" },
      { userId: 3, instrumentId: 4, rentalStartDate: "2021-03-15", rentalEndDate: "2021-03-27" },
      { userId: 4, instrumentId: 5, rentalStartDate: "2021-04-01", rentalEndDate: "2021-04-05" },
      { userId: 5, instrumentId: 6, rentalStartDate: "2021-03-17", rentalEndDate: "2021-03-28" },
      { userId: 6, instrumentId: 7, rentalStartDate: "2021-04-02", rentalEndDate: "2021-04-10" },
      { userId: 7, instrumentId: 8, rentalStartDate: "2021-02-15", rentalEndDate: "2021-02-20" },
      { userId: 8, instrumentId: 9, rentalStartDate: "2021-03-16", rentalEndDate: "2021-03-24" },
      { userId: 9, instrumentId: 10, rentalStartDate: "2021-03-15", rentalEndDate: "2021-03-20" },
      { userId: 1, instrumentId: 11, rentalStartDate: "2021-01-19", rentalEndDate: "2021-01-21" },
      { userId: 2, instrumentId: 12, rentalStartDate: "2021-02-10", rentalEndDate: "2021-02-20" },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rentals', null, {});
  }
};
