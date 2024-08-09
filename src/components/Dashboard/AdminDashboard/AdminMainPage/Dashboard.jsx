import React from 'react'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <>
    <div className="admin-dashboard gap-5 mt-3">
      
      {/* temperature */}
      <div className="col-md-2 gap-3 temperature-card">
        <div className="temperatue-title text-start">
          <p>Temperature</p>
        </div>
        <div className="temperature-body">
          <div className="temp-icon">
            <i className='bx bxs-sun text-warning'></i>
          </div>
          <div className="temperature-value text-start">
            <p><span>23 &#176;C </span><br/> Partly Cloudy</p>
          </div>
        </div>
      </div>

      {/* Humidity */}

      <div className="col-md-2 gap-3 temperature-card">
        <div className="temperatue-title text-start">
          <p>Humidity</p>
        </div>
        <div className="temperature-body">
          <div className="temp-icon">
          <i className='bx bx-wind text-primary-emphasis'></i>
          </div>
          <div className="temperature-value text-start">
          <p><span>20 %</span><br/> Very Dry</p>
          </div>
        </div>
      </div>
      {/* ph value */}

      <div className="col-md-2 gap-3 temperature-card">
        <div className="temperatue-title text-start">
          <p>pH Value</p>
        </div>
        <div className="temperature-body">
          <div className="temp-icon">
          <i className='bx bx-droplet' ></i>
          </div>
          <div className="temperature-value text-start">
          <p><span>4.5</span><br/> Acidic</p>
          </div>
        </div>
      </div>

      {/* light intensity */}

      <div className="col-md-2 gap-3 temperature-card">
        <div className="temperatue-title text-start">
          <p>Light Intensity</p>
        </div>
        <div className="temperature-body">
          <div className="temp-icon">
          <i className='bx bx-bulb' style={{ color: '#A020F0' }} ></i>
          </div>
          <div className="temperature-value text-start">
          <p><span>24k Lux</span><br/> Tolerable</p>
          </div>
        </div>
      </div>

      {/*co2 level  */}

      <div className="col-md-2 gap-3 temperature-card">
        <div className="temperatue-title text-start">
          <p>CO2 Level</p>
        </div>
        <div className="temperature-body">
          <div className="temp-icon">
          <i className='bx bx-cloud'></i>
          </div>
          <div className="temperature-value text-start">
          <p><span>5.26 ppm</span><br/>Normal</p>
          </div>
        </div>
      </div>

      {/* Total User */}

      <div className="col-md-2 gap-3 temperature-card">
        <div className="temperatue-title text-start">
          <p>Total User</p>
        </div>
        <div className="temperature-body">
          <div className="temp-icon">
          <i className='bx bx-user text-primary'></i>
          </div>
          <div className="temperature-value text-start">
          <p><span>45</span><br/>Farmers</p>
          </div>
        </div>
      </div>

      {/* Active User */}
      <div className="col-md-2 gap-3 temperature-card">
        <div className="temperatue-title text-start">
          <p>Active User</p>
        </div>
        <div className="temperature-body">
          <div className="temp-icon">
          <i className='bx bx-user text-success'></i>
          </div>
          <div className="temperature-value text-start">
          <p><span>35</span><br/>Farmers</p>
          </div>
        </div>
      </div>

      {/* inactive User */}
      <div className="col-md-2 gap-3 temperature-card">
        <div className="temperatue-title text-start">
          <p>Inactive User</p>
        </div>
        <div className="temperature-body">
          <div className="temp-icon">
          <i className='bx bx-user text-secondary'></i>
          </div>
          <div className="temperature-value text-start">
          <p><span>25</span><br/>Farmers</p>
          </div>
        </div>
      </div>

      {/* Total Device */}

      <div className="col-md-2 gap-3 temperature-card">
        <div className="temperatue-title text-start">
          <p>Active Devices</p>
        </div>
        <div className="temperature-body">
          <div className="temp-icon">
          <i className='bx bx-broadcast text-primary'></i>
          </div>
          <div className="temperature-value text-start">
          <p><span>10</span><br/>Devices</p>
          </div>
        </div>
      </div>

      {/* Total visitor */}

      <div className="col-md-2 gap-3 temperature-card">
        <div className="temperatue-title text-start">
          <p>Total Visitors</p>
        </div>
        <div className="temperature-body">
          <div className="temp-icon">
          <i className='bx bx-group text-primary-emphasis'></i>
          </div>
          <div className="temperature-value text-start">
          <p><span>78</span><br/>Visitors</p>
          </div>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Dashboard

