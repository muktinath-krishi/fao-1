import React, {useState,useEffect} from 'react'
import Header from "../../Layout/Header/Header"
import SideNavbar from '../../Layout/SideNav/SideNavbar';
// import AdminMainPage from './AdminMainPage/AdminMainPage';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

    useEffect(() => {
        const toggle = document.getElementById("header-toggle");
        const bodypd = document.getElementById("body-pd");
        const headerpd = document.getElementById("header");
    
        const showNavbar = () => {
          // change icon
          toggle.classList.toggle("bx-x");
           // add padding to body
           bodypd.classList.toggle("body-pd");
           // add padding to header
           headerpd.classList.toggle("body-pd");

           setIsSidebarToggled(!isSidebarToggled);
    
        };
        if (toggle && bodypd && headerpd) {
          toggle.addEventListener("click", showNavbar);
        }
        return () => {
          if (toggle) {
            toggle.removeEventListener("click", showNavbar);
          }
       
        };
    
      }, [isSidebarToggled]);
  return (
    <>
    <main id="body-pd">
        <Header/>
        <SideNavbar/>
        <div className={`body-container ${isSidebarToggled ? 'body-pd' : ''}`}>
            <div className={`admin-main-page ${isSidebarToggled ? 'body-pd' : ''}`}>
              <Outlet /> 
            </div>  
        </div>

    </main>
    </>
  )
}

export default AdminDashboard
