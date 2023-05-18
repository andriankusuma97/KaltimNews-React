'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let dataTags= require("../data/tags.json")
    dataTags.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
  })

  await queryInterface.bulkInsert('Tags', dataTags)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null)
  }
};

