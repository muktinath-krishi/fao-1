import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import "../UserList/userlist.css";
import { API_BASE_URL } from '../../../Api/auth';

const AdminList = () => {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admin/admins`);
        setAdminData(response.data.admins);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch admin data.');
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="userlist">
        <div className="create-user d-flex justify-content-end align-items-center">
          <NavLink to="/admin/createadmin" className="text-decoration-none">
            <button type="button" className='btn btn-primary d-flex gap-2 justify-content-center align-items-center'>
              <i className='bx bx-plus nav_icon'></i>Create Admin
            </button>
          </NavLink>
        </div>
        <div className="userlist-table mt-5">
          <table className="table text-start">
            <thead className="table-light">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td className='d-flex gap-2'>
                    <Link to={`/admin/adminlist/showadmin/${item.id}`}>
                      <button className='btn btn-success'>
                        <i className='bx bxs-show'></i>
                      </button>
                    </Link>
                    <Link to={`/admin/updateuser/${item.id}`}>
                      <button className='btn btn-primary'>
                        <i className='bx bx-edit-alt'></i>
                      </button>
                    </Link>
                    <button className='btn btn-danger'>
                      <i className='bx bxs-trash-alt'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminList;
