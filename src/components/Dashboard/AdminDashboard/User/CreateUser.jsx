import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./style/createuser.css";
import axios from "axios";
import { API_BASE_URL } from "../../../Api/auth"
import { toast } from "react-toastify";


const CreateSuperAdmin = () => {
  const navigate = useNavigate();
    const[name,setName] = useState('');
    const[phone_number,setPhoneNumber] = useState('');
    const[password,setPassword] = useState('');
    const[confirm_password,setConfirmPassword] = useState('');
    const[error,setError] = useState('');
    // const [loading, setLoading] = useState(false);

    const notifyCreated = (message) => {
      toast.success(message, { position: "top-right", autoClose: 5000 });
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
          case 'name':
              setName(value);
              break;
          case 'phone_number':
              setPhoneNumber(value);
              break;
          case 'password':
              setPassword(value);
              break;
          case 'confirm_password':
              setConfirmPassword(value);
              break;
          default:
              break;
      }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
        setError('Passwords do not match.');
        return;
    }

    try {
      
      const response = await axios.post(`${API_BASE_URL}/admin/users/store`, {
            name,
            phone_number,
            password,
            confirm_password
        });
        notifyCreated(response.data.message);
        navigate("/admin/user-management");

    } catch (error) {
        setError('Failed to create user.');
    }
};



  return (
    <>
      <div className="createuser mt-5 mb-5 p-0">
      
        <div className="createuser-header d-flex gap-5 justify-content-center align-items-center">
          
          <div className="col-md-4 header-content text-start">
            <div className="back-btn mb-2">
              <Link to="/admin/user-management">
                <i className='bx bx-arrow-back' ></i>
              </Link>
            </div>
            <h1>
              <span>Empower the Future</span><br />Register a New User Today
            </h1>
            <p className='mt-4'>
              Welcome to the farmer registration page! Please fill out the form below with the necessary details to register a new farmer.
            </p>
          </div>
          <div className="col-md-4 header-img">
            <img src="/createuserImg.svg" alt="farmer" />
          </div>
        </div>
        <div className="col-md-8 form-container p-0 mt-5 text-start d-flex justify-content-center">
          <form className="row farmer-form d-flex justify-content-start" onSubmit={handleSubmit}>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="name" className='form-label'>User Name</label>
              <input type="text" id="name" className="form-control" name="name" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="phone_number" className='form-label'>Phone Number</label>
              <input type="number" id="phone_number" className="form-control" name="phone_number" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="password" className='form-label'>Password</label>
              <input type="password" id="password" className="form-control" name="password" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="confirm_password" className='form-label'>Confirm Password</label>
              <input type="password" id="confirm_password" className="form-control" name="confirm_password" required onChange={handleChange} />
            </div>

            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
           
            <div className="register-btn mt-4 d-flex justify-content-start">
              <button type="submit" className="btn btn-primary">
                Register User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateSuperAdmin;


{/* <div className="assign-device d-flex gap-5 mt-4">
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="heater" name="heater" onChange={handleChange} />
                <label className="form-check-label" htmlFor="heater">Heater</label>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="coolingPad" name="coolingPad" onChange={handleChange} />
                <label className="form-check-label" htmlFor="coolingPad">Cooling Pad</label>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="fogger" name="fogger" onChange={handleChange} />
                <label className="form-check-label" htmlFor="fogger">Fogger</label>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="fan" name="fan" onChange={handleChange} />
                <label className="form-check-label" htmlFor="fan">Fan</label>
              </div>
</div> */}