const express= require('express')
const router= express.Router()

const cAuth = require("./controllers/auth/authController");
router.get("/api/auth/checkEmail/:email", cAuth.checkEmail);
router.post("/api/auth/register", cAuth.register);
router.post("/api/auth/login", cAuth.tryLogin);

module.exports = router;

