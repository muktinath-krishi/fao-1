import React, {useEffect} from 'react';
import Header from '../../Layout/Header/Header';
import MainPage from './MainPage/MainPage';
import "../../Layout/SideNav/sidenavbar.css"
import SideNavbar from '../../Layout/SideNav/SideNavbar';


const UserDashboard = () => {

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

    };
    if (toggle && bodypd && headerpd) {
      toggle.addEventListener("click", showNavbar);
    }
    return () => {
      if (toggle) {
        toggle.removeEventListener("click", showNavbar);
      }
   
    };

  }, []);

  return (
    <>
    <main id="body-pd">
      <Header/>
      <SideNavbar/>
      <div className="body-container">
        
        <MainPage />
        
      </div>
    </main>
      
    </>
  );
};

export default UserDashboard;

