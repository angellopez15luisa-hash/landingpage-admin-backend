'use strict';

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

    await queryInterface.bulkInsert('hero_sections', [
      {
        image_path: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=80',
        tag: '⚡ Colección Exclusiva 2026',
        title: 'Ropa Exclusiva',
        highlight_text: 'A Pedido',
        description: 'Seleccionamos las prendas urbanas más destacadas y las traemos directo a tu puerta de forma segura.'
      },
      {
        image_path: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&q=80',
        tag: '🔥 Tendencia Urbana',
        title: 'Estilo Sin',
        highlight_text: 'Límites',
        description:
          'Diseños únicos importados especialmente para destacar tu personalidad en el día a día.',
      },
      {
        image_path: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80',
        tag: '✨ Edición Limitada',
        title: 'Novedades del',
        highlight_text: 'Drop',
        description: 'Aparta tus piezas favoritas antes de que se agoten en stock internacional.',
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('hero_sections', null, {})
  }
};
