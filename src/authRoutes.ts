import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

// Dummy user data for demonstration purposes
const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: '$2b$10$FvP6bWbQhizGZMFOv0gFu.8hYs0zd8JZetVBDqmG1DC5fGKcLbivC', // Password: "password"
  },
];

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Compare the provided password with the stored hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: user.id }, 'secret-key');

  res.json({ token });
});

export default router;