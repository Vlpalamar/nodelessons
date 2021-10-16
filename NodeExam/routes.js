const express= require('express')
const router= express.Router()

const cAuth= require('./controllers/auth/authController')
router.get('./api/auth/checkEmail/:email',cAuth.checkEmail)
router.post('./api/auth/checkEmail',cAuth.register)
router.post('./api/auth/tryLogin',cAuth.tryLogin)


module.exports = router;

