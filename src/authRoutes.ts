import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

// Dummy user data for demonstration purposes
const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: '$2b$10$LBdJf0HzUzpSxJ6Jslo2buRgE23XoqT5/mYLzUUFgjOeDGFD8y1QG',
  },
];

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received email:', email);
  console.log('Received password:', password);

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  console.log('Is password valid?', isPasswordValid);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id }, 'secret-key');

  res.json({ token });
});

export default router;