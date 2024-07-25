import React from "react";
import "./style/devicemanagement.css";
import { NavLink, Outlet, Link } from "react-router-dom";

const DeviceManagement = () => {
  return (
    <div className="container">
      <div
        class="card shadow-none position-relative overflow-hidden mb-4"
        style={{ background: "var(--primary-color-light)" }}
      >
        <div class="card-body px-4 py-3">
          <div class="row">
            <div class="col-9 text-start">
              <h4 class="fw-semibold mb-8">Device Management</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/admin/dashboard" class="text-muted text-decoration-none">
                    <i className='bx bx-home-alt'></i>
                    </Link>
                  </li>
                  <li class="breadcrumb-item">
                    <Link to="" class="text-muted text-decoration-none">
                      Device Management
                    </Link>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    List
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-3 text-end">
              <img src="/src/assets/fao_logo.png" width="70px"   alt="FAO" />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="device-nav mt-5">
            <NavLink
              to="device-list"
              className={({ isActive }) =>
                isActive ? "device-nav_link active" : "device-nav_link"
              }
            >
              All Devices
            </NavLink>
            <NavLink
              to="pin-registration"
              className={({ isActive }) =>
                isActive ? "device-nav_link active" : "device-nav_link"
              }
            >
              Pin Registration
            </NavLink>
            <NavLink
              to="create"
              className={({ isActive }) =>
                isActive ? "device-nav_link active" : "device-nav_link"
              }
            >
              Create Device
            </NavLink>
          </div>
          <div className="device-content mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceManagement;
