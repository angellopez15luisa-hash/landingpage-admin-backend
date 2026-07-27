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
      "footer_sections",
      [
        {
          text_logo: "DROP·ZONE",
          description:
            " Traemos lo que buscas directamente a tus manos. Importaciones rápidas, seguras y garantizadas a nivel nacional.",
          icon_phone: "ri-phone-line",
          phone: "+51 900 000 000",
          icon_email: "ri-mail-line",
          email: "contacto@tumarca.com",
          icon_address: "ri-map-pin-line",
          address: "Lima, Perú",
          icon_hours: "ri-time-line",
          hours: "Lunes a Sábado: 9:00 am - 7:00 pm",
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
    await queryInterface.bulkDelete("footer_sections", null, {});
  },
};
