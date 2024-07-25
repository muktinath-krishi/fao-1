import React, { useEffect } from "react";
import { NavLink, useLocation} from "react-router-dom";
import FAOLogo from "../../../assets/fao_logo.png";
import "./sidenavbar.css";
import { useAuth } from "../../Contexts/AuthContext";
import strings from "../../Localization/Localization";


const SideNavbar = () => {
  const { role, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const toggle = document.getElementById("header-toggle");
    const nav = document.getElementById("nav-bar");
    const bodypd = document.getElementById("body-pd");

    const showNavbar = () => {
      nav.classList.toggle("show");
      bodypd.classList.toggle("body-pd");
    };

    if (toggle && nav && bodypd) {
      toggle.addEventListener("click", showNavbar);
    }

    return () => {
      if (toggle) {
        toggle.removeEventListener("click", showNavbar);
      }
  
    };
  }, []);


  return (
    <div className="l-navbar" id="nav-bar">
      <nav className="nav container-with-scroll">
        <div>
          <NavLink to="" className="nav_logo">
            <img src={FAOLogo} alt="FAO" />
            <p>FAO</p>
          </NavLink>

          <div className="nav_list">
            <p className="nav_link text-white text-start fw-bold mb-0 ">Home</p>

            <NavLink to="dashboard" className={({isActive})=>isActive?"nav_link active":"nav_link"}>
              <i className="bx bx-grid-alt nav_icon"></i>
              <span className="nav_name">{strings.dashboard}</span>
            </NavLink>

            <NavLink to="temperature" className={({isActive})=>isActive?"nav_link active":"nav_link"}>
              <i className="bx bxs-sun nav_icon"></i>
              <span className="nav_name">{strings.temperature}</span>
            </NavLink>

            <NavLink to="humidity" className={({isActive})=>isActive?"nav_link active":"nav_link"}>
              <i className="bx bx-wind nav_icon"></i>
              <span className="nav_name">{strings.humidity}</span>
            </NavLink>

            <p className="nav_link text-white text-start fw-bold mb-0">User Management</p>

            {(role==='super_admin') && (
              <NavLink to="superadmin-management" className={({isActive=(location.pathname.startsWith('/admin/superadmin-management'))})=>isActive?"nav_link active":"nav_link"}>  
              <i className='bx bxs-user nav_icon'></i>
              <span className="nav_name">{strings.superadmin}</span>
            </NavLink>
            )}

            {(role==='super_admin') && (
              <NavLink to="admin-management" className={({isActive=(location.pathname.startsWith('/admin/admin-management'))})=>isActive?"nav_link active":"nav_link"}>
              <i className='bx bxs-group nav_icon'></i>
              <span className="nav_name">{strings.admin}</span>
            </NavLink>
            )}

            {(role === 'admin'|| role ==='super_admin') &&(
              <NavLink to="user-management" className={({isActive=(location.pathname.startsWith('/admin/user-management'))})=>isActive?"nav_link active":"nav_link"}>
              <i className='bx bxs-group nav_icon'></i>
              <span className="nav_name">{strings.user}</span>
            </NavLink>
            )}

          <p className="nav_link text-white text-start fw-bold mb-0">Device Management</p>
          

            {(role==='super_admin') && (
              <NavLink to="device-management" className={({isActive=(location.pathname.startsWith('/admin/device-management'))})=>isActive?"nav_link active":"nav_link"}>
              <i className='bx bx-devices nav_icon'></i>
              <span className="nav_name">{strings.device}</span>
            </NavLink>
            )}

          <div className="logout mt-5">
            {(role === 'admin'|| role ==='super_admin') && (
                <NavLink to="/admin/login" onClick={logout} className={({isActive})=>isActive?"nav_link active":"nav_link"}>
                <i className='bx bx-log-out nav_icon'></i>
                <span className="nav_name">{strings.logout}</span>
              </NavLink>
              )}

          </div>



            {/* <NavLink to={`profile/${userId}`} className={({isActive})=>isActive?"nav_link active":"nav_link"}>
              <i className="bx bxs-user nav_icon"></i>
              <span className="nav_name">Profile</span>
            </NavLink> */}
            
          </div>
          
          
        </div>
      </nav>
    </div>
  );
};

export default SideNavbar;
