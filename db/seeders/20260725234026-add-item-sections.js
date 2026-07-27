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
      "item_sections",
      [
        {
          text: "Inicio",
          href: "#inicio",
          flag_navbar: false,
          flag_footer: true,
        },
        {
          text: "¿Como pedir?",
          href: "#como-pedir",
          flag_navbar: true,
          flag_footer: true,
        },
        {
          text: "Catalogo",
          href: "#catalogo",
          flag_navbar: true,
          flag_footer: true,
        },
        {
          text: "Opiniones",
          href: "#opiniones",
          flag_navbar: true,
          flag_footer: true,
        },
        {
          text: "Preguntas",
          href: "#faq",
          flag_navbar: true,
          flag_footer: false,
        },
        {
          text: "Contacto",
          href: "#contacto",
          flag_navbar: true,
          flag_footer: false,
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

    await queryInterface.bulkDelete("item_sections", null, {});
  },
};
