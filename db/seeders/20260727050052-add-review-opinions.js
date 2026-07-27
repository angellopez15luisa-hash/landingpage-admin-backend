"use strict";

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
      "review_opinions",
      [
        {
          name: "Camila R.",
          rating: 5,
          text: "Atención rápida por WhatsApp y la prenda llegó en excelente estado. Totalmente recomendado.",
        },
        {
          name: "Mateo G.",
          rating: 5,
          text: "Muy buena calidad de tela y los tiempos de entrega se cumplieron sin problemas.",
        },
        {
          name: "Camila R.",
          rating: 5,
          text: "Me encantó la atención y lo rápido que llegó mi pedido. La tela de la prenda se siente de súper buena calidad. ¡Definitivamente volveré a comprar!",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("review_opinions", null, {});
  },
};
