const Goal = require('../models/Goal.model');

const getGoals = async (req, res) => {
    try {
        const goals = await Goal.find().sort({ createdAt: 1 });
        res.json(goals);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

const addGoal = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text || text.trim() === '') {
            return res.status(400).json({ error: 'Goal text is required' });
        }
        const goal = new Goal({ text });
        await goal.save();
        res.status(201).json(goal);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

const updateGoal = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, completed } = req.body;

        const goal = await Goal.findById(id);
        if (!goal) {
            return res.status(404).json({ error: 'Goal not found' });
        }

        if (text !== undefined && text.trim() !== '') {
            goal.text = text;
        }
        if (completed !== undefined) {
            goal.completed = completed;
        } else if (Object.keys(req.body).length === 0) {
            goal.completed = !goal.completed;
        }

        await goal.save();
        res.json(goal);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteGoal = async (req, res) => {
    try {
        const { id } = req.params;
        const goal = await Goal.findByIdAndDelete(id);
        if (!goal) {
            return res.status(404).json({ error: 'Goal not found' });
        }
        res.json({ message: 'Goal deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal,
};