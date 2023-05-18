'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
 
    static associate(models) {
      // define association here
      Tags.belongsTo(models.Post,{foreignKey:"postId"})
    }
  }
  Tags.init({
    postId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'postId cannot be null'
          },
          notEmpty: {
              msg: 'postId cannot be empety'
          }
      }
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'name Tags cannot be null'
          },
          notEmpty: {
              msg: 'name Tags cannot be empety'
          }
      }
  },
  }, {
    sequelize,
    modelName: 'Tags',
  });
  return Tags;
};