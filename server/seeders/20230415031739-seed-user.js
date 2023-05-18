'use strict';

const { hashPassword } = require("../helper/passwordBycript");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let dataAuthors= require("../data/author.json")
    dataAuthors.forEach(el => {
      el.password = hashPassword(el.password)
      el.createdAt = new Date()
      el.updatedAt = new Date()
  })

  await queryInterface.bulkInsert('Users', dataAuthors)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null)
  }
};
