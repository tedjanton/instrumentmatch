'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      { userId: 1, instrumentId: 2, review: "Plays beautifully! Would highly recommend for anyone that is needing a last minute instrument.", rating: 5 },
      { userId: 5, instrumentId: 1, review: "My instrument broke a day before my gig, and I was at a complete loss of what to use. This one saved the day! I'm just lucky it was avaiable for when I needed it.", rating: 5 },
      { userId: 6, instrumentId: 1, review: "The instrument worked well, but kept having a sticky key. It still worked for what I needed, but it should definitely be serviced soon.", rating: 4 },
      { userId: 4, instrumentId: 1, review: "Just ok.", rating: 3 },
      { userId: 10, instrumentId: 1, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 8, instrumentId: 1, review: "Solid choice for someone in a pinch.", rating: 5 },
      { userId: 4, instrumentId: 2, review: "My instrument broke a day before my gig, and I was at a complete loss of what to use. This one saved the day! I'm just lucky it was avaiable for when I needed it.", rating: 5 },
      { userId: 3, instrumentId: 2, review: "The instrument worked well, but kept having a sticky key. It still worked for what I needed, but it should definitely be serviced soon.", rating: 4 },
      { userId: 7, instrumentId: 2, review: "Plays beautifully! Would highly recommend for anyone that is needing a last minute instrument.", rating: 5 },
      { userId: 9, instrumentId: 3, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 11, instrumentId: 3, review: "Just ok.", rating: 3 },
      { userId: 12, instrumentId: 3, review: "Great instrument!", rating: 5 },
      { userId: 1, instrumentId: 3, review: "My son dropped his instrument out in the snow, and I desperately needed to find a replacement for him. This worked great, and I'm lucky it was avaiable when I needed it!", rating: 5 },
      { userId: 1, instrumentId: 5, review: "Solid choice for someone in a pinch.", rating: 5 },
      { userId: 12, instrumentId: 3, review: "Took a little getting used to since I usually play another make of this instument, but still worked well for what I needed to do with it.", rating: 4 },
      { userId: 11, instrumentId: 4, review: "Just ok.", rating: 3 },
      { userId: 9, instrumentId: 3, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 9, instrumentId: 4, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 9, instrumentId: 5, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 9, instrumentId: 6, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 9, instrumentId: 7, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 9, instrumentId: 8, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 9, instrumentId: 9, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 9, instrumentId: 10, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 9, instrumentId: 11, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },
      { userId: 9, instrumentId: 3, review: "This is one of the best instruments I have every played. 100% would recommend!", rating: 5 },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
