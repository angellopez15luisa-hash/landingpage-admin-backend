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
      "general_settings",
      [
        {
          text_name_company: "DROP·ZONE",
          text_button_navbar: "Pedir",
          text_button_hero_section: "VER DROP DE LA SEMANA",
          text_title_order_step: "¿CÓMO REALIZAR TU PEDIDO?",
          text_subtitle_order_step: "Proceso sencillo en 3 pasos",
          text_title_catalog_item: "CATÁLOGO EXCLUSIVO",
          text_subtitle_catalog_item:
            "Explora los drops seleccionados de la temporada",
          text_title_review_opinion: "OPINIONES DE CLIENTES",
          text_subtitle_review_opinion:
            "Lo que dicen quienes ya confiaron en nosotros",
          text_title_faq_item_question: "PREGUNTAS FRECUENTES",
          text_subtitle_faq_item_question:
            "Resolvemos tus dudas sobre el proceso de compra e importación",
          text_description_footer_section:
            "Traemos lo que buscas directamente a tus manos. Importaciones rápidas, seguras y garantizadas a nivel nacional.",
          text_phone_footer_section: "+51 900 000 000",
          text_email_footer_section: "contacto@tumarca.com",
          text_address_footer_section: "Lima, Perú",
          text_business_hours_footer_section:
            "Lunes a Sábado: 9:00 am - 7:00 pm",
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

    await queryInterface.bulkDelete("general_settings", null, {});
  },
};
