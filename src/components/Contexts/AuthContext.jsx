import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const getTokenExpirationDate = (token) => {
  const { exp } = jwtDecode(token);
  return exp * 1000;
};

const isTokenExpired = (token) => {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < Date.now();
};

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedRole = localStorage.getItem("role");
    const storedUserId = localStorage.getItem("userId");

    if (storedToken) {
      if (isTokenExpired(storedToken)) {
        refreshAccessToken();
      } else {
        setRole(storedRole);
        setUserId(storedUserId);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storedToken}`;
        setIsAuthenticated(true);
      }
    }
  }, []);

  // login function
  const login = (token, role, userId, userData) => {
    localStorage.setItem("accessToken", token.access_token);
    localStorage.setItem("refreshToken", token.refresh_token);
    localStorage.setItem("expiresIn", token.expires_in);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", userId);

    setUser(userData);
    setRole(role);
    setUserId(userId);

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token.access_token}`;
    setIsAuthenticated(true);
  };

  // logout function
  const logout = () => {
    localStorage.clear();
    setRole(null);
    setUserId(null);
    setUser(null);
    setIsAuthenticated(false);
    delete axios.defaults.headers.common["Authorization"];
  };

  // refresh token function
  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post("/token/refresh", {
        refresh_token: refreshToken,
      });
      const { access_token, expires_in } = response.data;
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("expiresIn", expires_in);

      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Failed to refresh token:", error);
      logout();
    }
  };

  const handleSessionExpiration = () => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      if (isTokenExpired(storedToken)) {
        refreshAccessToken();
      } else {
        setIsAuthenticated(true);
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  // Check token expiration periodically (e.g., every minute)
  useEffect(() => {
    const interval = setInterval(() => {
      handleSessionExpiration();
    }, 600000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    // passing required value to useAuth function
    <AuthContext.Provider
      value={{
        role,
        user,
        userId,
        login,
        logout,
        refreshAccessToken,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
