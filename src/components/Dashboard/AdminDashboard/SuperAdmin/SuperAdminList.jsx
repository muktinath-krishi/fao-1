import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "../User/style/userlist.css";
import { API_BASE_URL } from "../../../Api/auth";
import Loading from "../../../Loading/Loading";
import { toast } from "react-toastify";
import strings from "../../../Localization/Localization";
import DataTable from "react-data-table-component";

const SuperAdminList = () => {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const notifySuccess = (message) => {
    toast.success(message, { position: "top-right", autoClose: 5000 });
  };

  const notifyDelete = (message) => {
    toast.success(message, { position: "top-right", autoClose: 5000 });
  };

  const notifyDeleteError = (message) => {
    toast.success(message, { position: "top-right", autoClose: 5000 });
  };

  const notifyError = (message) => {
    toast.error(message, { position: "top-right", autoClose: 5000 });
  };

  // fetching api
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admin/super-admin`);
        setAdminData(response.data.admins);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch admin data.");
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  // isBlocked function
  const handleBlockToggle = async (userId, isBlocked) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/admin/super-admin/block?userId=${userId}`,
        { isBlocked: !isBlocked }
      );

      const updatedAdminData = adminData.map((admin) =>
        admin.id === userId
          ? { ...admin, is_blocked: !admin.is_blocked }
          : admin
      );
      setAdminData(updatedAdminData);
      notifySuccess(response.data.message);
    } catch (error) {
      // console.error('Error blocking/unblocking super admin:', error);
      notifyError("Failed to update super admin status.");
    }
  };

  // delete function
  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/admin/super-admin/delete?userId=${userId}`
      );

      const updatedAdminData = adminData.filter((admin) => admin.id !== userId);
      setAdminData(updatedAdminData);
      notifyDelete(response.data.message);
    } catch (error) {
      notifyDeleteError("Failed to delete super admin.");
    }
  };

  // data table
  const columns = [
    {
      name: "#",
      selector: (row) => row.index,
      width: "80px",
      style:{
        fontWeight:"bold"
      }
    },
    {
      name: strings.name,
      selector: (row) => row.name,
    },
    {
      name: strings.email,
      selector: (row) => row.email,
    },
    {
      name: strings.status,
      selector: (row) => row.status,
      width:"150px"
    },
    {
      name: strings.action,
      selector: (row) => (
        <>
          <div className="d-flex gap-2">
            <Link to={`${row.id}`}>
              <button className="btn btn-outline-success">
                <i className="bx bxs-show"></i>
              </button>
            </Link>
            <Link to={`update/${row.id}`}>
              <button className="btn btn-outline-primary">
                <i className="bx bx-edit-alt"></i>
              </button>
            </Link>
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDelete(row.id)}
            >
              <i className="bx bxs-trash-alt"></i>
            </button>
          </div>

        </>
      ),
      width:"200px"
    },
    {
      name:"",
      selector:(row)=>(
        <div className="form-check form-switch" style={{ cursor: "pointer" }}>
          <input
            className="form-check-input form-control ms-2"
            style={{ cursor: "pointer" }}
            type="checkbox"
            role="switch"
            id={`flexSwitchCheckDefault-${row.id}`}
            checked={!row.is_blocked}
            onChange={() => handleBlockToggle(row.id, row.is_blocked)}
          />
      </div>
      ),
     
    }
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        fontSize: "16px",
      },
    },
    rows: {
      style: {
        fontSize: "16px",
      },
    },
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="userlist">
        <div className="create-user d-flex justify-content-end align-items-center mb-4">
          <NavLink to="create" className="text-decoration-none">
            <button
              type="button"
              className="btn btn-primary d-flex gap-2 justify-content-center align-items-center"
            >
              <i className="bx bx-plus nav_icon"></i>Create Super Admin
            </button>
          </NavLink>
        </div>
        {/* <div className="userlist-table mt-5">
          <table className="table text-start">
            <thead className="table-light">
              <tr>
                <th scope="col">{strings.id}</th>
                <th scope="col">{strings.name}</th>
                <th scope="col">{strings.email}</th>
                <th scope="col">{strings.status}</th>
                <th scope="col">{strings.action}</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.is_blocked ? (
                      <span className="badge fs-6 fw-light text-bg-danger">
                        Blocked
                      </span>
                    ) : (
                      <span className="badge fs-6 fw-light  text-bg-success">
                        Active
                      </span>
                    )}
                  </td>
                  <td className="d-flex gap-2">
                    <Link to={`${item.id}`}>
                      <button className="btn btn-outline-success">
                        <i className="bx bxs-show"></i>
                      </button>
                    </Link>
                    <Link to={`update/${item.id}`}>
                      <button className="btn btn-outline-primary">
                        <i className="bx bx-edit-alt"></i>
                      </button>
                    </Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="bx bxs-trash-alt"></i>
                    </button>
                    <div
                      className="form-check form-switch"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        className="form-check-input form-control ms-2"
                        style={{ cursor: "pointer" }}
                        type="checkbox"
                        role="switch"
                        id={`flexSwitchCheckDefault-${item.id}`}
                        checked={!item.is_blocked}
                        onChange={() =>
                          handleBlockToggle(item.id, item.is_blocked)
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>

      <div className="admin-table">
        <DataTable
          columns={columns}
          data={adminData.map((admin, index) => ({
            index: index + 1,
            id: admin.id,
            name: admin.name,
            email: admin.email,
            status: admin.is_blocked ? (
              <span className="badge fs-6 fw-light text-bg-danger">
                Blocked
              </span>
            ) : (
              <span className="badge fs-6 fw-light  text-bg-success">
                Active
              </span>
            ),
            is_blocked: admin.is_blocked,
          }))}
          pagination
          fixedHeader
          customStyles={customStyles}
        />
      </div>
    </>
  );
};

export default SuperAdminList;
