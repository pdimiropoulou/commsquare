'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Kpi1",
      [
        {
          interval_start_timestamp: 1684139188,
          interval_end_timestamp: 1684139190,
          service_id: 1,
          total_bytes: 150,
          interval: "5min",
        },
        {
          interval_start_timestamp: 1684139205,
          interval_end_timestamp: 1684139302,
          service_id: 2,
          total_bytes: 208,
          interval: "1hour",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
