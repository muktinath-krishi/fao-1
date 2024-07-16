
import React, { useState } from 'react'
// import { useAuth } from '../../../Contexts/AuthContext'
import "./adminprofile.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const AdminProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalError, setModalError] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');

  const handleUpadteProfile=()=>{

  }
  // const { user } = useAuth();
  // const [name, setName] = useState(localStorage.getItem('name') || '');
  // const [email, setEmail] = useState(localStorage.getItem('email') || '');
  // const [role, setRole] = useState(localStorage.getItem('role') || '');
 

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem('name', user.name);
  //     localStorage.setItem('email', user.email);
  //     localStorage.setItem('role', user.role);

  //     setName(user.name);
  //     setEmail(user.email);
  //     setRole(user.role);
  //   }
  // }, [user]);


  return (
    <>
    {/* <div>
      <h1>this is <span className='text-success'>{role}</span> profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div> */}
    <div className="admin-profile">
      <div className="admin-profile-content">
        <div className="profile-edit-btn d-flex justify-content-end align-items-center">
          <button className='btn btn-primary' onClick={() => setShowModal(true)}>Edit Profile</button>
        </div>
        <div className="admin-profile-details mt-5">
          <div className="admin-profile-img">
            <img src="/farmerImg.png" alt="ajaychaudhary" />
          </div>
          <div className="admin-profile-text text-start">
            <h4>Name: Ajay Chaudhary</h4>
            <h4>Address:</h4>
            <p>Province: Bagmati</p>
            <p>District: Kathmandu</p>
            <p>Local Bodies: Basundhara</p>
            <p>Street: Dharapati</p>

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
              <label htmlFor="username" className="form-label">Enter full name</label>
              <input type="text" id="username" className="form-control shadow-none" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label">Enter address</label>
              <hr/>
              {/* province */}
              <label className="form-label">Province</label>
              <select className="form-select shadow-none" aria-label="Default select example">
                <option selected>Koshi Province</option>
                <option value="1">Madhesh Province</option>
                <option value="2">Bagmati Province</option>
                <option value="3">Gandaki Province</option>
                <option value="3">Lumbini Province</option>
                <option value="3">Karnali Province</option>
                <option value="3">Sudurpashchim Province</option>
              </select>

              {/* districts */}

            </div>
            <div className="form-outline mb-4">
              <label for="formFile" className="form-label">Upload your image</label>
              <input className="form-control shadow-none" type="file" id="formFile"/>
            </div>
            {modalError &&
              <p style={{ color: 'red', marginTop: '10px' }}>{modalError}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleUpadteProfile}>
              Update Profile
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
      
      
   
    </>
    
  )
}

export default AdminProfile

