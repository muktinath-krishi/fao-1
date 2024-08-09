import React, {useState, useEffect, useContext } from 'react'
import "../../Layout/SideNav/sidenavbar.css";
import { Link} from "react-router-dom";
import { useAuth } from '../../Contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { API_BASE_URL } from "../../Api/auth";
import strings from '../../Localization/Localization';
import LanguageContext from '../../Localization/LanguageContext';
import axios from 'axios';


const Header = () => {
  const {changeLanguage, language} = useContext(LanguageContext);
  const {role, userId, user, logout} = useAuth();
 
  const [showModal, setShowModal] = useState(false);
  const [old_password, setOldpassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalError, setModalError] = useState('');
  const [profile_image, setProfileImage] = useState(localStorage.getItem('profile_image') || '');
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [flagImage, setFlagImage] = useState('/usa-flag.png'); // default flag

 
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

        if(user){
          localStorage.setItem('name', user.name);
          localStorage.setItem('profile_image', user.profile_image);

          setName(user.name);
          setProfileImage(user.profile_image);
        }

         // Update flag based on language
    if (language === 'eng') {
      setFlagImage('/usa-flag.png');
    } else if (language === 'nep') {
      setFlagImage('/nepal-flag.png');
    }
      }, [user, language]);

      const handleForgotPassword = async () => {
        if (password !== confirmPassword) {
          setModalError('Passwords do not match');
          return;
        }
        try {
          const response =  await axios.post(`${API_BASE_URL}/user/change-password`, { 
          old_password, password });

          if(response.data.success){
            setShowModal(false);
          }
          else{
            setModalError('Failed to update password');
          }
          
        } catch (error) {
          setModalError('Failed to update password');
        }
      };

      const handleLanguageChange = (lang) => {
        changeLanguage(lang);
      };

  return (
    <>
    <header className="header" id="header">
        <div className="header_toggle">
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>
        <div className="lang-translation" style={{width:"90%"}}>
          <div className="dropdown">
            <Link className="btn btn-secondary dropdown-toggle lang-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={flagImage} alt="English"/>
            </Link>
            <ul className="dropdown-menu mt-4">
              <li>
                <Link className="dropdown-item" onClick={()=>handleLanguageChange('eng')}>
                  <img src="/usa-flag.png" alt="English" className='me-2' width="30" height="30"/>English
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" onClick={()=>handleLanguageChange('nep')}>
                  <img src="/nepal-flag.png" alt="Nepal" className='me-2' width="30" height="30"/>Nepali
                </Link>
              </li>
            </ul>
          </div>      
        </div>

        <div className="header_img">
            <li className="nav-item dropdown"> 
              <Link className="nav-link dropdown-toggle profile-img" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={"https://fao.muktinathitech.com.np" + profile_image} alt={name} />
              </Link>
                <ul className="dropdown-menu dropdown-menu-end mt-4 me-5" aria-labelledby="navbarDropdown">        
                    <li><Link to={`profile/${userId}`} className="dropdown-item">{strings.profile}</Link></li>

                    <li><Link className="dropdown-item" onClick={() => setShowModal(true)}>{strings.change_password}</Link></li>

                    <li><hr className="dropdown-divider" /></li>
                    {role === 'admin' || role === 'super_admin' ? (
                    <li><Link to="/admin/login" className="dropdown-item" onClick={logout}>{strings.logout}</Link></li>
                      ) : (
                      <li><Link to="/" className="dropdown-item" onClick={logout}>{strings.logout}</Link></li>
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
