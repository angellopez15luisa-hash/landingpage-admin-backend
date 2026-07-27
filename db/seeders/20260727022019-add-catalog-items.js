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
      "catalog_items",
      [
        {
          title: "Oversized Cyber Hoodie",
          catalog_category_id: 2,
          price: 65,
          image_path:
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
          badge: "Más Vendido",
        },
        {
          title: "Cargo Techwear Pants",
          catalog_category_id: 3,
          price: 75,
          image_path:
            "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
          badge: "Nuevo",
        },
        {
          title: "Graphic Acid Tee",
          catalog_category_id: 4,
          price: 35,
          image_path:
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
          badge: "Exclusivo",
        },
        {
          title: "Streetwear Matching Set",
          catalog_category_id: 5,
          price: 110,
          image_path:
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
          badge: "Exclusivo",
        },
        {
          title: "Minimalist Urban Hoodie",
          catalog_category_id: 2,
          price: 60,
          image_path:
            "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
          badge: "Exclusivo",
        },
        {
          title: "Utility Cargo Shorts",
          catalog_category_id: 3,
          price: 50,
          image_path:
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
          badge: "Exclusivo",
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

    await queryInterface.bulkDelete("catalog_items", null, {});
  },
};
