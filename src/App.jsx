// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/Contexts/AuthContext';
import { LanguageProvider } from './components/Localization/LanguageContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

// sidenavbar
import Dashboard from './components/Dashboard/AdminDashboard/AdminMainPage/Dashboard';
import Temperature from './components/Dashboard/AdminDashboard/AdminMainPage/Temperature';
import Humidity from './components/Dashboard/AdminDashboard/AdminMainPage/Humidity';
import SuperAdminList from './components/Dashboard/AdminDashboard/SuperAdmin/SuperAdminList';
import AdminList from './components/Dashboard/AdminDashboard/AdminList/AdminList';
import UserList from './components/Dashboard/AdminDashboard/User/UserList';

// superadmin/pages
import ShowSuperAdmin from './components/Dashboard/AdminDashboard/SuperAdmin/ShowSuperAdmin';
import CreateSuperAdmin from './components/Dashboard/AdminDashboard/SuperAdmin/CreateSuperAdmin';
import UpdateSuperAdmin from './components/Dashboard/AdminDashboard/SuperAdmin/UpdateSuperAdmin';
import AdminProfile from './components/Dashboard/AdminDashboard/AdminProfile/AdminProfile';

//admins/pages
import CreateAdmin from './components/Dashboard/AdminDashboard/CreateAdmin/CreateAdmin';
import ShowAdmin from './components/Dashboard/AdminDashboard/ShowAdmin/ShowAdmin';
import UpdateAdmin from './components/Dashboard/AdminDashboard/AdminUpdate/AdminUpdate';

// users/pages
import CreateUser from './components/Dashboard/AdminDashboard/User/CreateUser';
import ShowUser from './components/Dashboard/AdminDashboard/User/ShowUser';
import UpdateUser from './components/Dashboard/AdminDashboard/User/UpdateUser';

//routes
// import { routePath } from './components/Route/Route';

// app css style
import './App.css';
// import DeviceManagement from './components/Dashboard/AdminDashboard/DeviceManagement/DeviceManagement';
// import DeviceList from './components/Dashboard/AdminDashboard/DeviceManagement/DeviceList';
// import PinRegistration from './components/Dashboard/AdminDashboard/DeviceManagement/PinRegistration';
// import CreateDevice from './components/Dashboard/AdminDashboard/DeviceManagement/CreateDevice';
// import ShowDevice from './components/Dashboard/AdminDashboard/DeviceManagement/ShowDevice';
// import UpdateDevice from './components/Dashboard/AdminDashboard/DeviceManagement/UpdateDevice';
import GreenhouseManagement from './components/Dashboard/AdminDashboard/DeviceManagement/GreenhouseManagement/GreenhouseManagement';
import SoillessManagement from './components/Dashboard/AdminDashboard/DeviceManagement/SoillessManagement/SoillessManagement';








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

          {/* protected admin routes */}
          {isAuthenticated && (role === 'super_admin' || role === 'admin') && (
            <Route path="admin" element={<AdminDashboard />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="temperature" element={<Temperature />} />
              <Route path="humidity" element={<Humidity />} />

              {/* admin/superadmin-management */}
              <Route path="superadmin-management" element={<SuperAdminList/>} />
              <Route path="superadmin-management/create" element={<CreateSuperAdmin/>} />
              <Route path="superadmin-management/:id" element={<ShowSuperAdmin/>} />
              <Route path="superadmin-management/update/:id" element={<UpdateSuperAdmin/>} />

              {/* admin/admin-management */}
              <Route path="admin-management" element={<AdminList />} />
              <Route path="admin-management/create" element={<CreateAdmin />} />
              <Route path="admin-management/:id" element={<ShowAdmin />} />
              <Route path="admin-management/update/:id" element={<UpdateAdmin />} />
              <Route path="profile/:id" element={<AdminProfile />} />

              {/* admin/user-management */}
              <Route path="user-management" element={<UserList />} />
              <Route path="user-management/create" element={<CreateUser />} />
              <Route path="user-management/:id" element={<ShowUser/>} />
              <Route path="user-management/update/:id" element={<UpdateUser />} />

              
              {/* <Route path="device-management" element={<DeviceManagement/>}>
                <Route index element={<DeviceList/>}/>
                <Route path="device-list" element={<DeviceList/>}/>
                <Route path="pin-registration" element={<PinRegistration/>}/>
                <Route path="create" element={<CreateDevice/>}/>
                <Route path=":id" element={<ShowDevice/>}/>
                <Route path="update/:id" element={<UpdateDevice/>}/>
              </Route> */}

              {/* admin/device-management */}
              <Route path="greenhouse-management" element={<GreenhouseManagement/>}/>
              <Route path="soilless-management" element={<SoillessManagement/>}/>



            </Route>
          )}

          {/* protected user routes */}
          {isAuthenticated && role === 'user' && (
            <Route path="/user/*" element={<UserDashboard />} />
          )}

          {/* fallback routes for non-authenticated users */}
          {!isAuthenticated && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/admin/login" element={<AdminLogin />} />
            </>
          )}

          {/* catch all */}
          <Route path="*" element={<NoPage />} />
        </Routes>
        <ToastContainer autoClose= {5000} />
      </Router>
      
    </div>
  );
};

const AppWrapper = () => (
  <AuthProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </AuthProvider>
);

export default AppWrapper;
