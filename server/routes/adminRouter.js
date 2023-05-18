const PostController = require('../controllers/postController')
const CategoryController = require('../controllers/categoryController')

const router = require('express').Router()


router.get('/post',PostController.showPost)
router.get('/post/:id',PostController.showPostById)
router.post('/post',PostController.addNewPost)
router.delete('/post/:id',PostController.destroyPost)
router.put('/post/:id',PostController.putPost)
router.get('/category',CategoryController.showCategory)
router.post('/category',CategoryController.showAddCategory)
router.delete('/category/:id',CategoryController.deleteCategory)


module.exports = router