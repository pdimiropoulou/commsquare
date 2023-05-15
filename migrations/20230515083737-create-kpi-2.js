'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kpi2', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      interval_start_timestamp: {
        type: Sequelize.BIGINT
      },
      interval_end_timestamp: {
        type: Sequelize.BIGINT
      },
      cell_id: {
        type: Sequelize.INTEGER
      },
      number_of_unique_users: {
        type: Sequelize.INTEGER
      },
      interval: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Kpi2');
  }
};
