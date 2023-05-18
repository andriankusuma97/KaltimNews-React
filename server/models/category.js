'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
  
    static associate(models) {
      // define association here
      Category.belongsToMany(models.User,{through:models.Post,foreignKey:"categoryId"})
    }
  }
  Category.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'name cannot be null'
          },
          notEmpty: {
              msg: 'name cannot be empety'
          }
      }
  },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};