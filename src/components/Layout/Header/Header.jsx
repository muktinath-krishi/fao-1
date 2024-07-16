import React, {useState, useEffect } from 'react'
import "../../Layout/SideNav/sidenavbar.css";
import { Link} from "react-router-dom";
import { useAuth } from '../../Contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { API_BASE_URL } from "../../Api/auth";
import axios from 'axios';


const Header = () => {
  const {role, userId, logout} = useAuth();
 
  const [showModal, setShowModal] = useState(false);
  const [old_password, setOldpassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalError, setModalError] = useState('');
  
 
    useEffect(() => {
        const toggle = document.getElementById("header-toggle");
        const headerpd = document.getElementById("header");
    
        const showNavbar = () => {  
          // change icon
          toggle.classList.toggle("bx-x");

          // add padding to header
          headerpd.classList.toggle("body-pd");
        };

        if (toggle && headerpd) {
          toggle.addEventListener("click", showNavbar);
        }
    
        
      }, []);

      const handleForgotPassword = async () => {
        if (password !== confirmPassword) {
          setModalError('Passwords do not match');
          return;
        }
        try {
          const response =  await axios.post(`${API_BASE_URL}/user/change-password`, { 
          old_password, password });
          console.log("this is password response",response)
          console.log(response);

          if(response.data.success){
            console.log("password updated successfully")
            setShowModal(false);
          }
          else{
            setModalError('Failed to update password');
          }
          
        } catch (error) {
          setModalError('Failed to update password');
        }
      };



  return (
    <>
    <header className="header" id="header">
        <div className="header_toggle">
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>
        <div className="header_img">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                <ul className="dropdown-menu dropdown-menu-end mt-4 me-5" aria-labelledby="navbarDropdown">
                    <li><Link to={`profile/${userId}`} className="dropdown-item">Profile</Link></li>
                    <li><Link className="dropdown-item" href="#!" onClick={() => setShowModal(true)}>Change Password</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    {role === 'admin' || role === 'super_admin' ? (
              <li><Link to="/admin/login" className="dropdown-item" onClick={logout}>Logout</Link></li>
            ) : (
              <li><Link to="/" className="dropdown-item" onClick={logout}>Logout</Link></li>
            )}    
                </ul>
            </li>
        </div>

         {/* Forgot Password Modal */}
          <Modal show={showModal} onHide={() => setShowModal(false)} className="custom-modal">
            <Modal.Header closeButton>
              <Modal.Title>Reset Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-outline mb-4">
                <input type="password" id="old_password" className="form-control" value={old_password} onChange={(e) => setOldpassword(e.target.value)} placeholder='Old Password' required />
              </div>
              <div className="form-outline mb-4">
                <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='New Password' required />
              </div>
              <div className="form-outline mb-4">
                <input type="password" id="confirmPassword" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' required />
              </div>
              {modalError &&
                <p style={{ color: 'red', marginTop: '10px' }}>{modalError}</p>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleForgotPassword}>
                Update Password
              </Button>
            </Modal.Footer>
          </Modal>
      </header>
    </>
  )
}

export default Header
