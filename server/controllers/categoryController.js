const {
  Post,Category,User,
} = require("../models")

class CategoryController {
  static async showCategory(req,res,next){
    try{
      const category = await Category.findAll(
      {
        order: [
          ['createdAt', 'DESC'],
        ]
      }
      );
      res.status(200).json(category)
    }catch(error){
      next(error)
    }
  }
  static async showAddCategory(req, res, next) {
    try {
      const {
       name
      } = req.body

      const addCategory = await Category.create({
        name,
      });
      res.status(201).json(addCategory.name)
    } catch (error) {
      next(error)
    }
  }

  static async deleteCategory(req,res,next){
    try{
      const {id} =req.params
      console.log(id,"<<<dari controller delete")
      const findCategory = await Category.findOne({where:{id}})
      console.log(findCategory,"<<<< ini data Category")
      if(!findCategory){
        throw {name:"NotFound"}
      }else{
        const DestroyCategory = await Category.destroy({where:{id}});
        res.status(200).json({message:`Succses delete ${findCategory.title}`})
      }
    }catch(error){
      next(error)
    }
  }
}

module.exports = CategoryController