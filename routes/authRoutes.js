const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/authController');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

console.log('Auth routes loaded');


module.exports = router;
