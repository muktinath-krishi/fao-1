import React from "react";
import { Link } from "react-router-dom";

const SoillessManagement = () => {
  const handleSubmit = () => {};
  const handleInputChange = () => {};
  return (
    <>
      <div
        className="card shadow-none position-relative overflow-hidden mb-4"
        style={{ background: "var(--primary-color-light)" }}
      >
        <div className="card-body px-4 py-3">
          <div className="row">
            <div className="col-9 text-start">
              <h4 className="fw-semibold mb-8">
                Soilless Automation Management
              </h4>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link
                      to="/admin/dashboard"
                      className="text-muted text-decoration-none"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="" className="text-muted text-decoration-none">
                      Soilless Automation
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-3 text-end">
              <img src="/src/assets/fao_logo.png" width="70px" alt="FAO" />
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="card col-lg-12 col-md-8  form-container ps-2 mt-5 text-start d-flex justify-content-center">
        <form
          className="row farmer-form d-flex justify-content-start border-0"
          onSubmit={handleSubmit}
        >
          <div className="input-conatiner d-flex flex-column gap-2">
            <h4>Submersible Pump</h4>
            <div className="row d-flex">
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="submersible_pump" className="form-label">
                  Submersible Pump Time Interval
                </label>
                <input
                  type="number"
                  id="submersible_pump"
                  //   value="submersible_pump"
                  className="form-control border-secondary"
                  name="submersible_pump"
                  onChange={handleInputChange}
                  placeholder="Time in minutes"
                  required
                />
                
              </div>
            </div>
          </div>
          <div className="input-container d-flex flex-column gap-2">
            <h4>Solenoid Valve</h4>
            <div className="row input-group d-flex">
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="min_ec" className="form-label">
                  Minimum Electric Conductivity
                </label>
                <input
                  type="number"
                  id="min_ec"
                  //   value="min_ec"
                  className="form-control border-secondary"
                  name="min_ec"
                  onChange={handleInputChange}
                  placeholder="min electric conductivity"
                  required
                />
              </div>
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="max_ec" className="form-label">
                  Maximum Electric Conductivity
                </label>
                <input
                  type="number"
                  id="max_ec"
                  //   value="max_ec"
                  className="form-control border-secondary"
                  name="max_ec"
                  onChange={handleInputChange}
                  placeholder="max electric conductivity"
                  required
                />
              </div>
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="min_ph" className="form-label">
                  Minimum pH
                </label>
                <input
                  type="number"
                  id="min_ph"
                  //   value="min_ph"
                  className="form-control border-secondary"
                  name="min_ph"
                  onChange={handleInputChange}
                  placeholder="min ph"
                />
              </div>

              <div className="col-md-3 col-12 form-group">
                <label htmlFor="max_ph" className="form-label">
                  Maximum pH
                </label>
                <input
                  type="number"
                  id="max_ph"
                  //   value="max_ph"
                  className="form-control border-secondary"
                  name="max_ph"
                  onChange={handleInputChange}
                  placeholder="max ph"
                />
              </div>
            </div>
          </div>

          <div className="input-container d-flex flex-column gap-2">
            <h4>LED Grow Light</h4>
            <div className="row input-group d-flex">
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="min_intensity" className="form-label">
                  Minimum Intensity
                </label>
                <input
                  type="number"
                  id="min_intensity"
                  //   value="moisture"
                  className="form-control border-secondary"
                  name="min_intensity"
                  onChange={handleInputChange}
                  placeholder="min intensity"
                />
              </div>
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="Sun_hour" className="form-label">
                  Sun Hour
                </label>
                <input
                  type="number"
                  id="Sun_hour"
                  //   value="moisture"
                  className="form-control border-secondary"
                  name="Sun_hour"
                  onChange={handleInputChange}
                  placeholder="Sun Hour"
                />
              </div>
            </div>
          </div>

          <div className="register-btn mt-4 d-flex justify-content-start">
            <button type="submit" className="btn btn-primary">
              Update Device
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SoillessManagement;
