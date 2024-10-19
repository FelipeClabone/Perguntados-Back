'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('perguntas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pergunta: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      gabarito: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      resposta2: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      resposta3: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      resposta4: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dificuldade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('perguntas');
  }
};
