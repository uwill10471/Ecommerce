import jwt from "jsonwebtoken";
import User from "../models/user.js";

async function verifyToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId); // Fetch full user
    if (!user) return res.status(404).json({ error: 'User not found' });

    req.user = user; // Attach full user to request
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

export default verifyToken;
