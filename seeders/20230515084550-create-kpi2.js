'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Kpi2",
      [
        {
          interval_start_timestamp: 1684139188,
          interval_end_timestamp: 1684139190,
          cell_id: 1,
          number_of_unique_users: 10,
          interval: "5min",
        },
        {
          interval_start_timestamp: 1684139205,
          interval_end_timestamp: 1684139302,
          cell_id: 2,
          number_of_unique_users: 20,
          interval: "1hour",
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
