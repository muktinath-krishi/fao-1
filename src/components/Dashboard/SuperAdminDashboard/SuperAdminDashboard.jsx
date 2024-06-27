import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Auth/AuthContext';

const SuperAdminDashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h2>I am Super Admin Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <Link to="/home">Go to Home</Link>
    </div>
  );
};

export default SuperAdminDashboard;
