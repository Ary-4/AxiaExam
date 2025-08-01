const cloudinary = require('cloudinary').v2;

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Helper to upload file buffer
const uploadToCloudinary = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ resource_type: "auto", folder }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    }).end(fileBuffer);
  });
};

// Single file
exports.uploadSingleFile = async (req, res) => {
  try {
    const result = await uploadToCloudinary(req.file.buffer, 'single');
    res.status(200).json({ message: 'Upload successful', url: result.secure_url });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

// Multiple files (same field)
exports.uploadMultipleFiles = async (req, res) => {
  try {
    const urls = await Promise.all(req.files.map(file =>
      uploadToCloudinary(file.buffer, 'multiple')
    ));
    res.status(200).json({ message: 'Multiple upload successful', urls });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

// Multiple fields
exports.uploadMultipleFields = async (req, res) => {
  try {
    const result = {};
    for (const field in req.files) {
      result[field] = await Promise.all(
        req.files[field].map(file =>
          uploadToCloudinary(file.buffer, 'fields/' + field)
        )
      );
    }
    res.status(200).json({ message: 'Multi-field upload successful', files: result });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

