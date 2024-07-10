// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth} from './components/Contexts/AuthContext';


// User login page
import Login from './components/Login/Login';

// Admin login page
import AdminLogin from './components/Login/AdminLogin';

// roles
import UserDashboard from './components/Dashboard/UserDashboard/UserDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard';
// import SuperAdminDashboard from './components/Dashboard/SuperAdminDashboard/SuperAdminDashboard';

// NO Page
import NoPage from './components/NoPage/NoPage';

// welcome page
import WelcomeHome from './components/WelcomeHome/WelcomeHome';

// admin pages
import Dashboard from './components/Dashboard/AdminDashboard/AdminMainPage/Dashboard';
import Temperature from './components/Dashboard/AdminDashboard/AdminMainPage/Temperature';
import Humidity from './components/Dashboard/AdminDashboard/AdminMainPage/Humidity';
import AdminProfile from './components/Dashboard/AdminDashboard/AdminProfile/AdminProfile';
import UserList from './components/Dashboard/AdminDashboard/UserList/UserList';
import CreateUser from './components/Dashboard/AdminDashboard/CreateUser/CreateUser';
import UpdateUser from './components/Dashboard/AdminDashboard/UpdateUser/UpdateUser';

// app css style
import './App.css';
import CreateAdmin from './components/Dashboard/AdminDashboard/CreateAdmin/CreateAdmin';
import AdminList from './components/Dashboard/AdminDashboard/AdminList/AdminList';
import ShowAdmin from './components/Dashboard/AdminDashboard/ShowAdmin/ShowAdmin';


const App = () => {
  const { role, isAuthenticated } = useAuth();

  return (
    <div className="app">
      <Router>
        <Routes>
          {/* public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/" element={<WelcomeHome />} />

            {/* admin protected*/}
            {isAuthenticated && role === 'admin' || role === 'super_admin'?(
              <Route path="/admin" element={<AdminDashboard />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="temperature" element={<Temperature />} />
                <Route path="humidity" element={<Humidity />} />
                <Route path="adminlist" element={<AdminList />} />
                <Route path="createadmin" element={<CreateAdmin/>}/>
                <Route path="adminlist/showadmin/:id" element={<ShowAdmin/>}/>
                <Route path="userlist" element={<UserList />} />
                <Route path="createuser" element={<CreateUser />} />
                <Route path="updateuser/:id" element={<UpdateUser />} />
                <Route path="profile/:id" element={<AdminProfile />} />
              </Route>

            ):(
              <Route path="/admin/login" element={<AdminLogin />} />
            )
          }

            {/* user protected */}
            {isAuthenticated ?(
              <Route path="/user/*" element={<UserDashboard /> } />

            ):(
              <Route path="/login" element={<Login />} />
            )}
          

          {/* catch all the page */}
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
