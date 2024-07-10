import React,{useState} from 'react'
import "./updateuser.css"
import { useParams } from 'react-router-dom';
import {Data} from "../UserList/UserData"

const UpdateUser = () => {
    const { id } = useParams();
    const farmerData = Data[0].farmerData.find(user => user.farmerId === id);

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
    <div className="updateuser mt-2 ms-4 mb-5">
        <div className="row updateuser-profile">
            <div className="col-md-4 profile-img">
                <img src={farmerData.farmerImg} alt={farmerData.farmerName} />
            </div>
            <div className="col-md-8 profile-details mt-2 text-start">
                <p>Name: <span>{farmerData.farmerName}</span></p>
                <p>Address: <span>{farmerData.farmerAdd}</span></p>
                <p>Phone Number: <span>{farmerData.farmerNumber}</span></p>
            </div>
        </div>

        {/* updateuser-greenhouse */}

        <div className="updateuser-greenhouse text-start">
            <p>GreenHouse Details</p>
            <div className="greenhouse-details mt-4">
                <form className="row updateuser-form d-flex justify-content-start" onSubmit={handleSubmit}>
                    <div className="col-md-4 col-12 form-group">
                    <label htmlFor="mintemp" className='form-label'>Minimum Temperature</label>
                    <input type="number" id="mintemp" className="form-control" name="mintemp" placeholder={farmerData.minTemp} required onChange={handleChange} />
                    </div>
                    <div className="col-md-4 col-12 form-group">
                    <label htmlFor="maxtemp" className='form-label'>Maximum Temperature</label>
                    <input type="number" id="maxtemp" className="form-control" name="maxtemp" placeholder={farmerData.maxTemp} required onChange={handleChange} />
                    </div>
                    <div className="col-md-4 col-12 form-group">
                    <label htmlFor="minhumi" className='form-label'>Minimum Humidity</label>
                    <input type="number" id="minhumi" className="form-control" name="minhumi" placeholder={farmerData.minHumi} required onChange={handleChange} />
                    </div>
                    <div className="col-md-4 col-12 form-group">
                    <label htmlFor="maxhumi" className='form-label'>Maximum Humidity</label>
                    <input type="number" id="maxhumi" className="form-control" name="maxhumi" placeholder={farmerData.maxHumi} required onChange={handleChange} />
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
                    <div className="update-btn mt-4 d-flex justify-content-start">
                      <button type="submit" className="btn btn-primary">Update Farmer</button>
                    </div>
                    
                </form>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default UpdateUser
