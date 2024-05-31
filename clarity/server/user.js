
const express = require('express');
const router = express.Router();
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            res.status(400).json({ message: "incorrect email" });
        }
        if (!password) {
            res.status(400).json({ message: "incorrect password" });
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ email, password: hashedPassword })
        const savedUser = await user.save()
        res.status(200).json({ email: savedUser.email, password: savedUser.password })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "smth went wrong" });
    }
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (isValid) {
      const token = jwt.sign({ userId: user._id }, 'yourSecretKey', { expiresIn: '1h' });

      return res.json({ status: 'success', token: token });
    } else {
      return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
    }
  } else {
    return res.status(404).json({ status: 'error', message: 'User not found' });
  }
});

module.exports = router;
