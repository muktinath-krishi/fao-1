
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

// login page
import Login from './components/Login/Login';

// roles
import UserDashboard from './components/Dashboard/UserDashboard/UserDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard';
import SuperAdminDashboard from './components/Dashboard/SuperAdminDashboard/SuperAdminDashboard';

// authentication
import { AuthProvider, useAuth } from './components/Auth/AuthContext';

// NO Page
import NoPage from './components/NoPage/NoPage';

// welcome page
import WelcomeHome from './components/WelcomeHome/WelcomeHome';

// admin pages
import Dashboard from './components/Dashboard/AdminDashboard/AdminMainPage/Dashboard';
import Temperature from './components/Dashboard/AdminDashboard/AdminMainPage/Temperature';
import Humidity from './components/Dashboard/AdminDashboard/AdminMainPage/Humidity'
import Profile from './components/Dashboard/AdminDashboard/AdminProfile/Profile'
import UserList from './components/Dashboard/AdminDashboard/UserList/UserList'
import CreateUser from './components/Dashboard/AdminDashboard/CreateUser/CreateUser'
import UpdateUser from './components/Dashboard/AdminDashboard/UpdateUser/UpdateUser'

// app css style
import './App.css';

const App = () => {
  const { isAuthenticated, role, login, logout } = useAuth();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const authState = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    const userId = localStorage.getItem('userId');

    if (authState && userRole && userId !== null) {
      setToken(authState);
      login(userRole, userId);
    }

    // Refresh token periodically
    const refreshInterval = setInterval(refreshSession, 600000); // 10 minutes
    return () => clearInterval(refreshInterval);
  }, [login]);

  const refreshSession = async () => {
    if (token) {
      try {
        const response = await axios.post('http://localhost:5000/refresh', { token });
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
      } catch (error) {
        console.error('Session refresh failed:', error);
        logout();
      }
    }
  };

 

  return (
    <div className="app">
      
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeHome />} />
          <Route path="login" element={isAuthenticated ? <Navigate to={`/${role}`} /> : <Login />} />

          <Route path="user" element={isAuthenticated && role === 'user' ? <UserDashboard /> : <Navigate to="/login" />} />
          <Route path="admin" element={isAuthenticated && role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/temperature" element={<Temperature />} />
            <Route path="humidity" element={<Humidity />} />
            <Route path="users" element={<UserList />} />
            <Route path="createuser" element={<CreateUser />} />
            <Route path="updateuser/:id" element={<UpdateUser />} />
            <Route path="profile/:id" element={<Profile />} />
          </Route>
          <Route path="super-admin" element={isAuthenticated && role === 'super-admin' ? <SuperAdminDashboard /> : <Navigate to="/login" />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
};

const AppWrapper = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWrapper;
