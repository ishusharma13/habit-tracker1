const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Sample route
app.get('/', (req, res) => {
  res.send('Habit Tracker API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const habitRoutes = require('./routes/habitRoutes');

app.use('/api/habits', habitRoutes);
