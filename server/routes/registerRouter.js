const RegisterController = require('../controllers/registerController')

const router = require('express').Router()


router.post('/',RegisterController.addRegisterAdmin)



module.exports = router