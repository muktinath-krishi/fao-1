import React, { useEffect } from "react";
import { NavLink, useLocation} from "react-router-dom";
import FAOLogo from "../../../assets/fao_logo.png";
import "./sidenavbar.css";
import { useAuth } from "../../Contexts/AuthContext";


const SideNavbar = () => {
  const { role} = useAuth();
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
            <NavLink to="dashboard" className={({isActive})=>isActive?"nav_link active":"nav_link"}>
              <i className="bx bx-grid-alt nav_icon"></i>
              <span className="nav_name">Dashboard</span>
            </NavLink>

            <NavLink to="temperature" className={({isActive})=>isActive?"nav_link active":"nav_link"}>
              <i className="bx bxs-sun nav_icon"></i>
              <span className="nav_name">Temperature</span>
            </NavLink>

            <NavLink to="humidity" className={({isActive})=>isActive?"nav_link active":"nav_link"}>
              <i className="bx bx-wind nav_icon"></i>
              <span className="nav_name">Humidity</span>
            </NavLink>

            {(role==='super_admin') && (
              <NavLink to="superadmin" className={({isActive=(location.pathname.startsWith('/admin/superadmin'))})=>isActive?"nav_link active":"nav_link"}>
              <i className='bx bxs-group nav_icon'></i>
              <span className="nav_name">SuperAdmin</span>
            </NavLink>
            )}

            {(role==='super_admin') && (
              <NavLink to="admins" className={({isActive=(location.pathname.startsWith('/admin/admins'))})=>isActive?"nav_link active":"nav_link"}>
              <i className='bx bxs-group nav_icon'></i>
              <span className="nav_name">Admin</span>
            </NavLink>
            )}

            {(role === 'admin'|| role ==='super_admin') &&(
              <NavLink to="users" className={({isActive=(location.pathname.startsWith('/admin/users'))})=>isActive?"nav_link active":"nav_link"}>
              <i className='bx bxs-group nav_icon'></i>
              <span className="nav_name">User</span>
            </NavLink>
            )}



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
