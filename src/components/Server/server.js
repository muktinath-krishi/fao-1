
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const SECRET_KEY = 'your_secret_key';
const SESSION_DURATION = '15m';

app.use(cors());
app.use(express.json());

const users = [
  { id: 0, username: 'user', password: 'user123', role: ['user'], details: { name: 'User One', email: 'user@example.com', address: 'Lahan', phone: '9863211232', device_id: '1010', user_status: 'active' } },
  { id: 1, username: 'admin', password: 'admin123', role: ['admin'], details: { name: 'Admin One', email: 'admin@example.com' } },
  { id: 2, username: 'superadmin', password: 'superadmin123', role: ['super-admin'], details: { name: 'Super Admin One', email: 'superadmin@example.com' } },
];

// Middleware to authenticate and authorize users
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: SESSION_DURATION });
    res.json({ token, role: user.role, userId: user.id });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Refresh token endpoint
app.post('/refresh', (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const newToken = jwt.sign({ id: decoded.id, role: decoded.role }, SECRET_KEY, { expiresIn: SESSION_DURATION });
    res.json({ token: newToken });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Logout endpoint
app.post('/logout', (req, res) => {
  res.json({ message: 'Successfully logged out' });
});

// User details endpoint
app.get('/user/:id', authenticateToken, (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json({ details: user.details });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Serve static files from the Vite build directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all handler for any requests that don't match the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Success Listening of API
app.listen(5000, () => {
  console.log('Dummy API running on port 5000');
});
