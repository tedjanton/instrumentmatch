'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      { userId: 4, instrumentId: 12, review: "Plays beautifully! Would highly recommend for anyone that is needing a last minute instrument.", rating: 5 },
      { userId: 5, instrumentId: 12, review: "My instrument broke a day before my gig, and I was at a complete loss of what to use. This one saved the day! I'm just lucky it was avaiable for when I needed it.", rating: 5 },
      { userId: 6, instrumentId: 12, review: "The instrument worked well, but kept having a sticky key. It still worked for what I needed, but it should definitely be serviced soon.", rating: 4 },
      { userId: 4, instrumentId: 13, review: "Just ok.", rating: 3 },
      { userId: 10, instrumentId: 13, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 8, instrumentId: 13, review: "Solid choice for someone in a pinch.", rating: 5 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
