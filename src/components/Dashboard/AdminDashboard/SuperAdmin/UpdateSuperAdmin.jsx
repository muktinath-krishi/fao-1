import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { API_BASE_URL } from "../../../Api/auth";
import "./style/updatesuperadmin.css";
import { toast } from 'react-toastify';


const UpdateSuperAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [adminData, setAdminData] = useState(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  const notifyUpdate = (message) => {
    toast.success(message, { position: "top-right", autoClose: 5000 });
  };
  const notifyFailed = (message) => {
    toast.error(message, { position: "top-right", autoClose: 5000 });
  };

  useEffect(() => {
    const fetchAdminData = async () => {
      // console.log("user id from url:",id)
      try {
        // console.log("i am here")
        const response = await axios.get(`${API_BASE_URL}/admin/super-admin?userId=${id}`);

        if (response) {
          setAdminData(response.data.admin);
          setName(response.data.admin.name);
        } else {
          setError('Admin not found');
        }
      } catch (error) {
        setError('Failed to fetch admin data.');
      }
    };

    fetchAdminData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirm_password) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.patch(`${API_BASE_URL}/admin/super-admin/update?userId=${id}`, {
        name,
        password,
        confirm_password: confirm_password
      });

      notifyUpdate(response.data.message);
      navigate("/admin/superadmin-management");
      
    } catch (error) {
      notifyFailed("Failed to update super admin")
      console.error('Error updating admin:', error);
     
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'password') setPassword(value);
    if (name === 'confirm_password') setConfirmPassword(value);
  };


  return (
    <>
    
      <div className="createuser mt-5 mb-5 p-0"> 
        <div className="createuser-header d-flex gap-5 justify-content-center align-items-center">
          <div className="back-btn mb-2">
            <Link to="/admin/superadmin-management">
              <i className='bx bx-arrow-back'></i>
            </Link>
          </div> 
          
        </div>
        <div className="col-md-8 form-container p-0 mt-5 text-start d-flex justify-content-center">
          <form className="row farmer-form d-flex justify-content-start" onSubmit={handleSubmit}>
            <div className="col-md-6 col-12 form-group">
              <label htmlFor="name" className='form-label'>Admin Name</label>
              <input 
                type="text" 
                id="name" 
                className="form-control" 
                name="name" 
                value={name} 
                placeholder={adminData?.name || ''} 
                required 
                onChange={handleChange} 
              />
            </div>
        
            <div className="col-md-6 col-12 form-group">
              <label htmlFor="password" className='form-label'>Password</label>
              <input 
                type="password" 
                id="password" 
                className="form-control" 
                name="password" 
                value={password} 
                required 
                onChange={handleChange} 
              />
            </div>
            <div className="col-md-6 col-12 form-group">
              <label htmlFor="confirm_password" className='form-label'>Confirm Password</label>
              <input 
                type="password" 
                id="confirm_password" 
                className="form-control" 
                name="confirm_password" 
                value={confirm_password} 
                required 
                onChange={handleChange} 
              />
            </div>

            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
           
            <div className="register-btn mt-4 d-flex justify-content-start">
              <button type="submit" className="btn btn-primary">
                Update Super Admin
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default UpdateSuperAdmin;
