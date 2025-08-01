const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/uploadController');

// Multer setup
const storage = multer.memoryStorage(); // using memory storage for Cloudinary
const upload = multer({ storage });

// ROUTES

// Single file upload
router.post('/single', upload.single('file'), uploadController.uploadSingleFile);

// Array of files (one field)
router.post('/multiple', upload.array('files', 5), uploadController.uploadMultipleFiles);

// Multiple fields
router.post(
  '/fields',
  upload.fields([
    { name: 'profilePics', maxCount: 3 },
    { name: 'documents', maxCount: 3 }
  ]),
  uploadController.uploadMultipleFields
);

module.exports = router;
