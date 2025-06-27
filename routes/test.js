const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

// Protected test route
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: `Welcome, user ${req.user.userId}!`,
    isAdmin: req.user.isAdmin
  });
});

module.exports = router;
