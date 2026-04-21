const express = require('express')
const router = express.Router()
const { register, login, checkEmail, resetPassword } = require('../controllers/authController')

router.post('/register', register)
router.post('/login', login)
router.post('/check-email', checkEmail)
router.post('/reset-password', resetPassword)

module.exports = router