'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turmas', [
      {
        data_inicio: "2020-07-01",
        nivel_id: 6,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2020-05-15",
        nivel_id: 5,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2021-11-05",
        nivel_id: 4,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Turmas', null, {});
     
  }
};
