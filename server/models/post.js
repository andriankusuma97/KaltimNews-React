'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
 
    static associate(models) {
      // define association here
      Post.belongsTo(models.User,{foreignKey:"authorId"})
      Post.belongsTo(models.Category,{foreignKey:"categoryId"})
      Post.hasMany(models.Tags,{foreignKey:"postId"})
    }
  }
  Post.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'title cannot be null'
          },
          notEmpty: {
              msg: 'title cannot be empety'
          }
      }
  },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'slug cannot be null'
          },
          notEmpty: {
              msg: 'slug cannot be empety'
          }
      }
  },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'content cannot be null'
          },
          notEmpty: {
              msg: 'content cannot be empety'
          }
      }
  },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'imgUrl cannot be null'
          },
          notEmpty: {
              msg: 'imgUrl cannot be empety'
          }
      }
  },
    categoryId:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'categoryId cannot be null'
          },
          notEmpty: {
              msg: 'categoryId cannot be empety'
          }
      }
  },
    authorId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'author cannot be null'
          },
          notEmpty: {
              msg: 'author cannot be empety'
          }
      }
  },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};