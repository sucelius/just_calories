'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Meals', 'user_id', {
          type:Sequelize.DataTypes.INTEGER,
          references: {
            model:'Users',
            key: 'id',
            allowNull: false
          }
        }, {transaction:t}),
        queryInterface.addColumn('Products', 'meal_id', {
          type:Sequelize.DataTypes.INTEGER,
          references:{
            model:'Meals',
            key: 'id',
            allowNull:false
          }
        }, {transaction:t})
      ])
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Meal', 'user_id', {transaction:t}),
        queryInterface.removeColumn('Product', 'meal_id', {transaction:t})
      ])
    })
  }
};
