
import React, { useState, useContext, createContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedUserId = localStorage.getItem('userId');
    if (storedRole && storedUserId) {
      setRole(storedRole);
      setUserId(storedUserId);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userRole, id) => {
    setIsAuthenticated(true);
    setRole(userRole);
    setUserId(id);
    localStorage.setItem('role', userRole);
    localStorage.setItem('userId', id);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
    setUserId(null);
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
