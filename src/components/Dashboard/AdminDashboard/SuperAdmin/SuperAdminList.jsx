import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import "../UserList/userlist.css";
import { API_BASE_URL } from '../../../Api/auth';

const SuperAdminList = () => {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetching api 
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admin/super-admin`);
        setAdminData(response.data.admins);   
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch admin data.');
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);


  // isBlocked function
  const handleBlockToggle = async (userId) => {
    try {
      await axios.post(`${API_BASE_URL}/admin/admins/block?userId=${userId}`);
      const updatedAdminData = adminData.map(admin => 
        admin.id === userId ? { ...admin, is_blocked: !admin.is_blocked } : admin
      );
      setAdminData(updatedAdminData);
    } catch (error) {
      console.error('Error blocking/unblocking admin:', error);
      setError('Failed to update admin status.');
    }
  };

// delete function
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${API_BASE_URL}/admin/admins/delete?userId=${userId}`);
      const updatedAdminData = adminData.filter(admin => admin.id !== userId);
      setAdminData(updatedAdminData);
    } catch (error) {
      setError('Failed to delete admin.');
    }
  };

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
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.is_blocked ?(<div className="btn btn-danger">Blocked</div>):
                  (<div className="btn btn-success">Active</div>)
                  }</td>
                  <td className='d-flex gap-2'>
                    <Link to={`/admin/superadmin/showsuperadmin/${item.id}`}>
                      <button className='btn btn-success'>
                        <i className='bx bxs-show'></i>
                      </button>
                    </Link>
                    <Link to={`/admin/superadmin/updateadmin/${item.id}`}>
                      <button className='btn btn-primary'>
                        <i className='bx bx-edit-alt'></i>
                      </button>
                    </Link>
                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>
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

export default SuperAdminList;
