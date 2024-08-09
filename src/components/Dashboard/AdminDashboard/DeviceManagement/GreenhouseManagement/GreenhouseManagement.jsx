import React from "react";
import { Link } from "react-router-dom";

const GreenhouseManagement = () => {
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
                Greenhouse Automation Management
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
                      Greenhouse Management
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
            <h4>Temperature</h4>
            <div className="row input-group d-flex">
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="min_temp" className="form-label">
                  Minimum Temperature
                </label>
                <input
                  type="number"
                  id="min_temp"
                  //   value="min_temp"
                  className="form-control border-secondary"
                  name="min_temp"
                  onChange={handleInputChange}
                  placeholder="min temperature"
                  required
                />
              </div>
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="max_temp" className="form-label">
                  Maximum Temperature
                </label>
                <input
                  type="number"
                  id="max_temp"
                  //   value="max_temp"
                  className="form-control border-secondary"
                  name="max_temp"
                  onChange={handleInputChange}
                  placeholder="max temperature"
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-conatiner d-flex flex-column gap-2">
            <h4>Humidity</h4>
            <div className="row input-group d-flex">
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="min_humi" className="form-label">
                  Minimum Humidity
                </label>
                <input
                  type="number"
                  id="min_humi"
                  //   value="min_humi"
                  className="form-control border-secondary"
                  name="min_humi"
                  onChange={handleInputChange}
                  placeholder="min humidity"
                />
              </div>
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="max_humi" className="form-label">
                  Maximum Humidity
                </label>
                <input
                  type="number"
                  id="max_humi"
                  //   value="max_humi"
                  className="form-control border-secondary"
                  name="max_humi"
                  onChange={handleInputChange}
                  placeholder="max humidity"
                />
              </div>
            </div>
          </div>

          <div className="input-conatiner d-flex flex-column gap-2">
            <h4>Moisture</h4>
            <div className="row input-group d-flex">
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="co2_level" className="form-label">
                  CO<sub>2</sub> Level for Visitor
                </label>
                <input
                  type="number"
                  id="co2_level"
                  //   value="co2_level"
                  className="form-control border-secondary"
                  name="co2_level"
                  onChange={handleInputChange}
                  placeholder="CO2 level"
                />
              </div>
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="min_moisture" className="form-label">
                  Minimum Moisture
                </label>
                <input
                  type="number"
                  id="min_moisture"
                  //   value="moisture"
                  className="form-control border-secondary"
                  name="min_moisture"
                  onChange={handleInputChange}
                  placeholder="min moisture"
                />
              </div>
              <div className="col-md-3 col-12 form-group">
                <label htmlFor="max_moisture" className="form-label">
                  Maximum Moisture
                </label>
                <input
                  type="number"
                  id="max_moisture"
                  //   value="moisture"
                  className="form-control border-secondary"
                  name="max_moisture"
                  onChange={handleInputChange}
                  placeholder="max moisture"
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

export default GreenhouseManagement;
