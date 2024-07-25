
import axios from 'axios';
import { useAuth } from '../Contexts/AuthContext';

// base api url
export const API_BASE_URL = 'https://fao.muktinathitech.com.np/api/v1';

//user login api call
const loginUser = async (phone_number, password) => {
  const response = await axios.post(`${API_BASE_URL}/login`, { phone_number, password });
  const { _token, user } = response.data;
  return { response, token: _token, user:user };
};


// admin and super_admin api call
const loginAdmin = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/admin/login`, { email, password });
  const { _token, user } = response.data;

  // if (user.is_blocked) {
  //   throw new Error('You have been blocked. Please contact the administrator.');
  // }

  return {token: _token, user:user};
 
};

export const useAuthApi = () => {
  const { login, logout, refreshAccessToken } = useAuth();

  // pass value to handleLogin in user login.js
  const handleUserLogin = async (phone_number, password) => {
    const data = await loginUser(phone_number, password);
    const user = data.user;
    login(data.token, 'user', data.user.id, user);

    // storing required data in localStorage

    localStorage.setItem('accessToken', data.token.access_token);
    localStorage.setItem('refreshToken', data.token.refresh_token);
    localStorage.setItem('expiresIn', data.token.expires_in);
  };

  // pass value to handleLogin in admin and superadmin AdminLogin.js
  const handleAdminLogin = async (email, password) => {
    const data = await loginAdmin(email, password);

    // console.log("handle admin data:",data);
    const user = data.user;
    login(data.token, data.user.role, data.user.id, user);
    
    // storing required data in localStorage
    localStorage.setItem('accessToken', data.token.access_token);
    localStorage.setItem('refreshToken', data.token.refresh_token);
    localStorage.setItem('expiresIn', data.token.expires_in);

    return data;
  };

  return { handleUserLogin, handleAdminLogin, logout, refreshAccessToken };
};



