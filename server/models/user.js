'use strict';
const {
  Model
} = require('sequelize');

let {hashPassword} = require('../helper/passwordBycript');



module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // define association here
      User.belongsToMany(models.Category,{through:models.Post,foreignKey:"authorId"})
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'username cannot be null'
          },
          notEmpty: {
              msg: 'username cannot be empety'
          }
      }
  },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'email cannot be null'
          },
        notEmpty: {
          msg: 'email cannot be empety'
        },
        isEmail :{
          msg: 'format must be email'
        }
          
      }
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'password cannot be null'
          },
          notEmpty: {
              msg: 'password cannot be empety'
          },
          len: {
            args : 5,
            msg: 'minimum password length is 5'
          }
      }
  },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instance){
        let hash = hashPassword(instance.password)
        instance.password = hash
      }
    },
  });
  return User;
};