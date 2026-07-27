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
      "order_steps",
      [
        {
          number: "01",
          title: "Elige tu Prenda",
          description:
            "Selecciona tu modelo favorito y verifica tu talla disponible en la lista.",
        },
        {
          number: "02",
          title: "Separa por WhatsApp",
          description:
            "Toca el botón de pedir para coordinar tu reserva con el 50% de adelanto.",
        },
        {
          number: "03",
          title: "Envío a Domicilio",
          description:
            "Importamos tu prenda y la enviamos directamente a tu casa.",
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
    await queryInterface.bulkDelete('order_steps', null, {})
  },
};
