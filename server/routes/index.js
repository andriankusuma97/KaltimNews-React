const router = require('express').Router()

const registerRouter = require('./registerRouter')
const loginRouter = require('./loginRouter')
const adminRouter = require('./adminRouter')
const customerRouter = require('./customerRouter')

const authentication = require('../middlewares/authentication')
const errorHendler = require('../middlewares/errorHendler')

// REGISTER AND LOGIN
router.use('/login', loginRouter)
router.use('/customer',customerRouter)

// MIDLEWARE-ACCSEC LOGIN
router.use(authentication)

//ROUTE ACCSES
router.use('/register', registerRouter)
router.use('/admin',adminRouter)




//ERROR HENDLER
router.use(errorHendler)



module.exports = router