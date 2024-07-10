// import express from 'express';
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// // const bodyParser = require('body-parser');

// const app = express();
// const SECRET_KEY = 'your_secret_key';
// const SESSION_DURATION = '15m';

// app.use(cors());
// app.use(express.json());

// // Middleware to authenticate and authorize users
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (!token) return res.sendStatus(401);

//   jwt.verify(token, SECRET_KEY, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };

// // Login endpoint
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username && u.password === password);
//   if (user) {
//     const token = jwt.sign({ userId: user.id, role: user.role }, SECRET_KEY, { expiresIn: SESSION_DURATION });
//     res.json({ token, userId: user.id, role: user.role  });
//   } else {
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
// });


// // Admin Login endpoint
// app.post('/admin/login', (req, res) => {
//   const { username, password } = req.body;
//   const admin = admins.find(a => a.username === username && a.password === password);
//   if (admin) {
//     const token = jwt.sign({ userId: admin.id, role: admin.role }, SECRET_KEY, { expiresIn: SESSION_DURATION });
//     res.json({ token, role: admin.role, userId: admin.id });
//   } else {
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
// });


// // Refresh token endpoint
// app.post('/refresh', (req, res) => {
//   const { token } = req.body;
//   try {
//     const payload = jwt.verify(token, SECRET_KEY);
//     const newToken = jwt.sign({ userId: payload.userId, role: payload.role }, SECRET_KEY, { expiresIn: SESSION_DURATION });
//     res.json({ token: newToken });
//   } catch (err) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// });

// // Logout endpoint
// app.post('/logout', (req, res) => {
//   res.json({ message: 'Logged out successfully' });
// });

// // User details endpoint
// app.get('/user/:id', authenticateToken, (req, res) => {
//   const userId = parseInt(req.params.id);
//   const user = users.find(u => u.id === userId);
//   if (user) {
//     res.json({ details: user.details });
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });

// // Admin User details endpoint
// app.get('/admin/:id', authenticateToken, (req, res) => {
//   const userId = parseInt(req.params.id);
//   console.log('Fetching details for admin ID:', userId);
//   const admin = admins.find(a => a.id === userId);
//   if (admin) {
//     console.log('Admin found:', admin);
//     res.json({ details: admin.details });
    
//   } else {
//     console.log('Admin not found for ID:', userId);
//     res.status(404).json({ error: 'Admin not found' });
//   }
// });


// // Success Listening of API
// app.listen(5000, () => {
//   console.log('Dummy API running on port 5000');
// });
