const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  completedDays: { type: [Number], default: [] }, // Store completed days (1-31)
  reminder: { type: String }, // Optional reminder
  notes: { type: String }, // Optional notes
});

module.exports = mongoose.model('Habit', HabitSchema);
