const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Import Routes
const authRoutes = require('./routes/authRoutes');
const testRoutes = require('./routes/test');


// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);

app.get('/', (req, res) => {
  res.send('Backend Exam 2 is running');
});

// DB Connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
