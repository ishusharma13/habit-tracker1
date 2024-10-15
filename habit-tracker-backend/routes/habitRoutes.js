const express = require('express');
const Habit = require('../models/Habit');
const router = express.Router();

// Create a new habit
router.post('/', async (req, res) => {
  const { name, reminder, notes } = req.body;
  const newHabit = new Habit({ name, reminder, notes });
  await newHabit.save();
  res.status(201).json(newHabit);
});

// Get all habits
router.get('/', async (req, res) => {
  const habits = await Habit.find();
  res.json(habits);
});

// Update a habit (for completing, deleting, etc.)
router.patch('/:id', async (req, res) => {
  const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(habit);
});

// Delete a habit
router.delete('/:id', async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
