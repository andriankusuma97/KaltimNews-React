const PostController = require('../controllers/postController')
const CategoryController = require('../controllers/categoryController')

const router = require('express').Router()


router.get('/post',PostController.showPost)
router.get('/post/:id',PostController.showPostById)
router.get('/category',CategoryController.showCategory)


module.exports = router