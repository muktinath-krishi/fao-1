import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import axios from 'axios';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      login(response.data.role, response.data.userId); 
    
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      
      navigate(`/${response.data.role}`);
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#9A616D" }}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col col-xl-10 p-0">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleLogin}>
                      <div className="d-flex justify-content-center mb-3 pb-5">
                        <h1 className="fw-bold mb-0">FAO Automation</h1>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>
                      <div className="form-outline mb-4">
                        <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' required />
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control form-control-lg" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} required />
                      </div>
                      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                      <div className="pt-1 mb-4">
                        <button className="d-flex ps-5 pe-5 btn btn-dark btn-lg" type="submit">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
