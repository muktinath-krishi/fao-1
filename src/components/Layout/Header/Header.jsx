import React, { useEffect,useContext } from 'react'
import "../../Layout/SideNav/sidenavbar.css";
import { Link } from "react-router-dom";
import AuthContext from '../../Auth/AuthContext';

const Header = () => {
    const { logout } = useContext(AuthContext);

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
                    <li><Link className="dropdown-item" href="#!">Settings</Link></li>
                    <li><Link className="dropdown-item" href="#!">Activity Log</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link to="/" className="dropdown-item" onClick={logout}>Logout</Link></li>
                </ul>
            </li>
        </div>
      </header>
    </>
  )
}

export default Header
