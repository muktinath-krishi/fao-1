import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./createuser.css";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    farmerId: '',
    farmerName: '',
    farmerAdd: '',
    farmerNumber: '',
    farmerDeviceId: '',
    mintemp: '',
    maxtemp: '',
    minhumi: '',
    maxhumi: '',
    status: 'active',
    devices: {
      heater: false,
      coolingPad: false,
      fogger: false,
      fan: false,
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        devices: {
          ...formData.devices,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <div className="createuser mt-5 mb-5 p-0">
      
        <div className="createuser-header d-flex gap-5 justify-content-center align-items-center">
          
          <div className="col-md-4 header-content text-start">
            <div className="back-btn mb-2">
              <Link to="/admin/users">
                <i class='bx bx-arrow-back' ></i>
              </Link>
            </div>
            <h1>
              <span>Empower the Future</span><br />Register a New Farmer Today
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
            <div className="col-md-4 col-12">
              <label htmlFor="farmerId" className='form-label'>Farmer ID</label>
              <input type="text" id="farmerId" className="form-control" name="farmerId" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="farmerName" className='form-label'>Farmer Name</label>
              <input type="text" id="farmerName" className="form-control" name="farmerName" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="farmerAdd" className='form-label'>Address</label>
              <input type="text" id="farmerAdd" className="form-control" name="farmerAdd" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="farmerNumber" className='form-label'>Phone Number</label>
              <input type="tel" id="farmerNumber" className="form-control" name="farmerNumber" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="farmerDeviceId" className='form-label'>Device ID</label>
              <input type="text" id="farmerDeviceId" className="form-control" name="farmerDeviceId" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="mintemp" className='form-label'>Minimum Temperature</label>
              <input type="number" id="mintemp" className="form-control" name="mintemp" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="maxtemp" className='form-label'>Maximum Temperature</label>
              <input type="number" id="maxtemp" className="form-control" name="maxtemp" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="minhumi" className='form-label'>Minimum Humidity</label>
              <input type="number" id="minhumi" className="form-control" name="minhumi" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="maxhumi" className='form-label'>Maximum Humidity</label>
              <input type="number" id="maxhumi" className="form-control" name="maxhumi" required onChange={handleChange} />
            </div>
            <div className="col-md-4 col-12 form-group">
              <label htmlFor="status" className='form-label'>Status</label>
              <select id="status" className="form-control custom-select" name="status" required onChange={handleChange}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="assign-device d-flex gap-5 mt-4">
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
            </div>
            <div className="register-btn mt-4 d-flex justify-content-start">
              <button type="submit" className="btn btn-primary">Register Farmer</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateUser;
