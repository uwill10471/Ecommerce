import express from 'express';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await argon2.hash(password);
    const user = new User({ username, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const passwordMatch = await argon2.verify(user.password, password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

      

    console.log("this is the jwt token",token);
    res.json({ token: token, Status:200,ok:true, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

export default router;
