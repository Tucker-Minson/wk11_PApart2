'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DraftPicks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fanId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Fans'
        },
        onDelete: 'CASCADE',
        allowNull: false,
        hook: true
      },
      playerId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Players'
        },
        onDelete: 'CASCADE',
        allowNull: false,
        hook: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DraftPicks');
  }
};
