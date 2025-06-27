const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token is present
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access Denied. No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, 'secretkey'); // same key used in login
    req.user = decoded; // attach user data to request
    next(); // allow request to continue
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = verifyToken;
