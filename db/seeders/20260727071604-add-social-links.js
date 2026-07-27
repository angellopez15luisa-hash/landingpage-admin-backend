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
    await queryInterface.bulkInsert("social_links", [
      { name: "Instagram", url: "#", icon: "ri-instagram-line" },
      { name: "Facebook", url: "#", icon: "ri-facebook-fill" },
      { name: "TikTok", url: "#", icon: "ri-tiktok-fill" },
      { name: "WhatsApp", url: "#", icon: "ri-whatsapp-line" },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("social_links", null, {});
  },
};
