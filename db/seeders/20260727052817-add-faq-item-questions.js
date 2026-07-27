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
      "faq_item_questions",
      [
        {
          question: "¿Cuánto demora la entrega?",
          answer:
            "El tiempo estimado de llegada e importación es de 5 a 8 días hábiles.",
        },
        {
          question: "¿Cuáles son los medios de pago?",
          answer: "Aceptamos Yape, Plin, transferencias bancarias y tarjetas.",
        },
        {
          question: "¿Hacen envíos a todo el país?",
          answer:
            "Sí, realizamos envíos seguros a nivel nacional. El tiempo de entrega estimado varía según tu ciudad, pero por lo general toma de 2 a 5 días hábiles.",
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

    await queryInterface.bulkDelete("faq_item_questions", null, {});
  },
};
