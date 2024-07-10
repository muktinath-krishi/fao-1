// import axios from 'axios';

// const API_BASE_URL = 'https://fao.muktinathitech.com.np/api/v1';


// export const getToken = () => localStorage.getItem('token');
// const getRefreshToken = () => localStorage.getItem('refreshToken');

// const setTokens = (accessToken, refreshToken) => {
//   localStorage.setItem('token', accessToken);
//   localStorage.setItem('refreshToken', refreshToken);
//   localStorage.setItem('tokenExpiresAt', Date.now() + expiresIn * 1000);
// };
// const isTokenExpired = () => {
//   const tokenExpiresAt = localStorage.getItem('tokenExpiresAt');
//   return tokenExpiresAt && Date.now() > tokenExpiresAt;
// };

// const refreshAccessToken = async () => {
//   try {
//     const refreshResponse = await axios.post(`${API_BASE_URL}/token/admin/refresh`, {
//       token: getRefreshToken(),
//     });

//     const { accessToken, refreshToken, expiresIn } = refreshResponse.data;
//     setTokens(accessToken, refreshToken, expiresIn);
//     return accessToken;
//   } catch (error) {
//     console.error('Error refreshing token:', error);
//     throw error;
//   }
// };

// const apiRequest = async (method, url, data = null, params = null) => {
//   if (isTokenExpired()) {
//     await refreshAccessToken();
//   }
//   const config = {
//     method,
//     url: `${API_BASE_URL}${url}`,
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//     data,
//     params,
//   };

//   try {
//     const response = await axios(config);
//     return response;
//   } catch (error) {
//     if (error.response && error.response.status === 401) {
      
//       try {
//         const refreshResponse = await axios.post(`${API_BASE_URL}/token/admin/refresh`, {
//           token: getRefreshToken(),
//         });

//         const { accessToken, refreshToken } = refreshResponse.data;
//         setTokens(accessToken, refreshToken);

//         // Update the config with the new token and retry the request
//         config.headers.Authorization = `Bearer ${accessToken}`;
//         const retryResponse = await axios(config);
//         return retryResponse.data;
//       } catch (refreshError) {
//         console.error('Error refreshing token:', refreshError);
//         throw refreshError;
//       }
//     }
//     console.error(`Error in ${method.toUpperCase()} request:`, error);
//     throw error;
//   }
// };

// export const apiGet = (url, params) => apiRequest('get', url, null, params);
// export const apiPost = (url, data) => apiRequest('post', url, data);
// export const apiDelete = (url) => apiRequest('delete', url);

// // logout function
// export const apiLogout = async () => {
//   try {
//     await apiPost('/logout');
//     localStorage.removeItem('token');
//     localStorage.removeItem('refreshToken');
//     localStorage.removeItem('role');
//     localStorage.removeItem('userId');
//   } catch (error) {
//     console.error('Error during logout:', error);
//     throw error;
//   }
// };