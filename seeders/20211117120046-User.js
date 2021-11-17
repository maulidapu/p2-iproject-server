'use strict';

const { hashing } = require('../helpers/bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', 
    [
      {
        email: 'admin@email.com',
        password: hashing('12345678'),
        role: 'admin',
        address: 'lebak bulus',
        province: 'dki jakarta',
        city:'jakarta selatan'
      },
      {
        email: 'maulidarsrnptr@gmail.com',
        password: hashing('mykikibeauty'),
        role: 'user',
        address: 'lebak bulus',
        province: 'dki jakarta',
        city:'jakarta selatan'
      },
    ], {});
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
