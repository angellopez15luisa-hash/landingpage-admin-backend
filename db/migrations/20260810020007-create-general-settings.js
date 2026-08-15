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

    await queryInterface.createTable("general_settings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      text_name_company: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_button_navbar: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_button_hero_section: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_title_order_step: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_subtitle_order_step: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_title_catalog_item: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_subtitle_catalog_item: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_title_review_opinion: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_subtitle_review_opinion: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_title_faq_item_question: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_subtitle_faq_item_question: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_description_footer_section: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      text_phone_footer_section: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_email_footer_section: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_address_footer_section: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text_business_hours_footer_section: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("current_timestamp"),
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal(
          "current_timestamp on update current_timestamp",
        ),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("general_settings");
  },
};
