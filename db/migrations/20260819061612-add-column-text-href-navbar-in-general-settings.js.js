"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // 1. Agregamos la columna nueva
    await queryInterface.addColumn("general_settings", "text_href_navbar", {
      type: Sequelize.STRING,
      allowNull: true, // Ponemos true para evitar errores en registros previos
      after: "text_button_navbar", // Esto asegura el orden visual en la tabla
    });

    // 2. Actualizamos los registros existentes con el valor por defecto
    await queryInterface.bulkUpdate(
      "general_settings",
      { text_href_navbar: "https://wa.me/51999999999" },
      {}, // Sin filtro para que afecte a todos los registros existentes
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('general_settings', 'text_href_navbar');
  },
};
