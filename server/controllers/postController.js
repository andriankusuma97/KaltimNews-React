const {
  Post,Category,User,Tags
} = require("../models")

const {sequelize} = require("../models")
const slugify = require('slugify');


class PostController {
  static async showPost(req,res,next){
    
    try{
      const post = await Post.findAll(
      {
        include:[
          {model: Category},
          { model: User,
            attributes: { exclude: ['password',"phoneNumber","address"] } 
          }, // include User model without showing the password attribute
          {model: Tags}
        ],
        order: [
          ['createdAt', 'DESC'],
        ]
      }
      );
      res.status(200).json(post)
    }catch(error){
      next(error)
    }
  }

  static async destroyPost(req,res,next){
    try{
      const {id} =req.params
      console.log(id,"<<<dari controller delete")
      const findPost = await Post.findOne({where:{id}})
      console.log(findPost,"<<<< ini data post")
      if(!findPost){
        throw {name:"NotFound"}
      }else{
        const DestroyPost = await Post.destroy({where:{id}});
        res.status(200).json({message:`Succses delete ${findPost.title}`})
      }
    }catch(error){
      next(error)
    }
  }

  static async addNewPost(req,res,next){
    const {title, content, imgUrl, categoryId,tags1,tags2} = req.body
    const t = await sequelize.transaction();
    try{
      const post = await Post.create(
        { 
          title,
          slug: slugify(title, { lower: true }) ,
          content,
          imgUrl,
          authorId: req.user.id,
          categoryId,
        },{ transaction: t }
      );
          
      const datatags = await Tags.create(
        {
          name: tags1,
          postId: post.id,
        },{ transaction: t }
      )
      const datatags2 = await Tags.create(
        {
          name: tags2,
          postId: post.id,
        },{ transaction: t }
      )
      await t.commit();
      res.status(201).json({message: `Sukses Create data with name ${post.title}`})
    }catch(error){
      await t.rollback();
      next(error)
    }
  }

  static async putPost(req,res,next){
    const t = await sequelize.transaction();
    try{
      console.log("<<<< mausk sini")
      const {id} =req.params
      console.log(id,"<<<< id")
      const {title, content, imgUrl, categoryId,tags1,tags2} = req.body
      const findPost = await Post.findOne({where:{id}})
      console.log(findPost,"<<<< post")
      if(!findPost){
        throw {name:"NotFound"}
      }else{
        console.log("<<<<masuk else")
        const editPost = await Post.update(
          {
          title,
          slug: slugify(title, { lower: true }) ,
          content,
          imgUrl,
          categoryId,
          },
          {where:{id}},{ transaction: t });
          console.log(editPost,"<<<<masuk edit post")
        if(!editPost) throw {name:"NotFound"}
        const editTags1 = await Tags.update(
          {
          name:tags1,
          },
          {where:{postId:id}},{ transaction: t });
          console.log(editPost,"<<<<masuk edit Tags1")
        const editTags2 = await Tags.update(
          {
          name:tags2,
          },
          {where:{postId:id}},{ transaction: t });
          console.log(editPost,"<<<<masuk edit Tags2")
        await t.commit();
        res.status(201).json({message:`Succses edite ${findPost.name} updated`})
      }
    }catch(error){
      await t.rollback();
      next(error)
    }
  }

  static async showPostById(req,res,next){
    try{
      const {id} =req.params
      const post = await Post.findByPk(id,
      {
        include:[
          {model: Category},
          { model: User,
            attributes: { exclude: ['password',"phoneNumber","address"] } 
          }, // include User model without showing the password attribute
          {model: Tags}
        ],
        order: [
          ['createdAt', 'DESC'],
        ]
      });
      if(!post){
        throw {name:"NotFound"}
      }else{
        res.status(200).json(post)
      }
    }catch(error){
      next(error)
    }
  }

}

module.exports = PostController