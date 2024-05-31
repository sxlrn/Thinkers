
const express = require('express');
const router = express.Router();
const User = require('./models/User');

router.get('/get-profile', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) return res.status(404).json({ error: 'User not found' });

        res.json({
            username: user.username,
            email: user.email,
            weight: user.weight,
            height: user.height,
            age: user.age,
            goal: user.goal,
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/set-profile', async (req, res) => {
    try {
        const { email, weight, height, age, goal } = req.body;
        const updatedUser = await User.findOneAndUpdate(
            { username: req.params.username },
            { email, weight, height, age, goal },
            { new: true }
        );
        if (!updatedUser) return res.status(404).json({ error: 'User not found' });

        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
