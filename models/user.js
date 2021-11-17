'use strict';
const {
  Model
} = require('sequelize');
const { hashing } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Item, { foreignKey: 'userId' })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Email is required' },
        notEmpty: { msg: 'Email is required' },
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password is required' },
        notEmpty: { msg: 'Password is required' }
      }
    },
    role: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate( (user, options) => {
    user.password = hashing(user.password);
  });
  return User;
};