"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // Agregamos is_active antes de created_at
    await queryInterface.addColumn("catalog_categories", "is_active", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      after: "text", // Se ubica después de 'text' (por lo tanto, antes de 'created_at')
    });
    // Agregamos is_default antes de created_at
    await queryInterface.addColumn("catalog_categories", "is_default", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      after: "is_active", // Se ubica justo después de is_active y antes de created_at
    });

    await queryInterface.sequelize.query(`
      update catalog_categories
      set is_default=1
      order by id asc
      limit 1
      `);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn("catalog_categories", "is_default");
    await queryInterface.removeColumn("catalog_categories", "is_active");
  },
};
