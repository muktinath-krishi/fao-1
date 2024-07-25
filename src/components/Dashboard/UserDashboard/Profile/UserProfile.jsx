
import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../Contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { API_BASE_URL } from '../../../Api/auth';
import axios from 'axios';
import "./userprofile.css";


const UserProfile = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [modalError, setModalError] = useState('');
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [phone_number, setPhoneNumber] = useState(localStorage.getItem('phone_number') || '');
  const [profile_image, setProfileImage] = useState(localStorage.getItem('profile_image') || '');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('name', user.name);
      localStorage.setItem('phone_number', user.phone_number);
      localStorage.setItem('profile_image', user.profile_image);

      setName(user.name);
      setPhoneNumber(user.phone_number);
      setProfileImage(user.profile_image);
     
    }
  }, [user]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  const handleUpdateProfile = async () => {
    setLoading(true);
    setModalError('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone_number', phone_number);
    if (selectedFile) {
      formData.append('profile_image', selectedFile);
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/user-profile/edit-profile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Update local storage and state with the updated profile data
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('phone_number', response.data.phone_number);
      localStorage.setItem('profile_image', response.data.profile_image);

      setName(response.data.name);
      setPhoneNumber(response.data.phone_number);
      setProfileImage(response.data.profile_image);
      setShowModal(false);
    } catch (error) {
      setModalError('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };
 

  return (
    <>
    <div className="user-profile">
      <div className="user-profile-content">
        <div className="profile-edit-btn d-flex justify-content-end align-items-center">
          <button className='btn btn-primary' onClick={() => setShowModal(true)}>Edit Profile</button>
        </div>
        <div className="user-profile-details mt-5">
          <div className="user-profile-img">
            <img src={"https://fao.muktinathitech.com.np" + profile_image} alt={name} />
          </div>

          <div className="user-profile-text text-start">
            <p>Name: {name}</p>
            <p>Phone Number: {phone_number}</p>
          </div>
        </div>

      </div>
    </div>

      {/* profile edit modal */}
      <div className="popup-modal">
        <Modal show={showModal} onHide={() => setShowModal(false)} className="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-outline mb-4">
              <label htmlFor="name" className="form-label">Enter Fullname</label>
              <input type="text" id="name" className="form-control shadow-none" value={name} onChange={(e) => setName(e.target.value)} placeholder='Username' required />
            </div>

            <div className="form-outline mb-4">
              <label htmlFor="phone_number" className="form-label">Enter Phone Number</label>
              <input type="number" id="phone_number" className="form-control shadow-none" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' required />
            </div>
            
            <div className="form-outline mb-4">
              <label htmlFor="formFile" className="form-label">Upload your image</label>
              <input className="form-control shadow-none" type="file" id="formFile"onChange={handleFileChange}/>
            </div>
            {modalError &&
              <p style={{ color: 'red', marginTop: '10px' }}>{modalError}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleUpdateProfile} disabled={loading}>
              Update Profile
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
      
      
   
    </>
    
  )
}

export default UserProfile


