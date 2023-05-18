'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let dataPosts= require("../data/post.json")
    dataPosts.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
  })

  await queryInterface.bulkInsert('Posts', dataPosts)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null)
  }
};