import React from 'react'
import { Link } from 'react-router-dom'
import "./welcomehome.css"
import SaveEarth from "/save-earth.jpg"

const WelcomeHome = () => {
  const linearGradient = 'linear-gradient(148deg, rgba(28,28,28,0.60) 0%, rgba(28,28,28,0.80) 100%)';
  const backgroundImageUrl = `url('${SaveEarth}')`;
  const backgroundImg = {
    background: `${linearGradient}, ${backgroundImageUrl} no-repeat center center / cover`,
    backgroundSize: 'cover',
  };
  return (
    <>
      <div className='container-fluid welcomehome' style={backgroundImg}>
        <div className="container gap-5">
          <div className="welcome-fao-logo">
            <img src="/fao-logo.png" alt="Food Association Organization" />
          </div>
          <div className="welcome-content text-white">
            <h1><span>Revolutionizing Agriculture with FAO Automation</span><br/> Web and Mobile Controlled Greenhouse and Hydroponic Solutions</h1>
            <p className='mt-5'>In the rapidly evolving field of agriculture, FAO Automation stands at the forefront by offering state-of-the-art greenhouse and hydroponic automation systems. By seamlessly integrating technology with agriculture, FAO Automation ensures precise control over environmental conditions, nutrient delivery, and irrigation schedules, all accessible at the touch of a button.</p>
          </div>
          <div className="login-btn">
            <Link to="/login">
              <button className='btn btn-primary'>Dashboard Login</button>
            </Link>
            {/* <Link to="/admin/login">
              <button className='btn btn-primary'>Admin Login</button>
            </Link> */}
          </div>
        </div>  
      </div>
    </>
    
  )
}

export default WelcomeHome
