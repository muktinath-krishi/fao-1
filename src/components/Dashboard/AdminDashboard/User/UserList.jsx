import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../../Api/auth';
import Loading from "../../../Loading/Loading";
import { toast } from 'react-toastify';
import "./style/userlist.css";
import strings from '../../../Localization/Localization';
// import { routePath } from '../../../Route/Route';


const UserList = () => {
  const [userData, setUserData] = useState([]);
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
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admin/users`);
        setUserData(response.data.users);
       
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch user data.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

 
  // isBlocked function
  const handleBlockToggle = async (userId, isBlocked) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/admin/users/block?userId=${userId}`,{isBlocked:!isBlocked});
      const updatedUserData = userData.map(user => 
        user.id === userId ? { ...user, is_blocked: !user.is_blocked } : user
      );
      setUserData(updatedUserData);
      notifySuccess(response.data.message);
    } catch (error) {
      // console.error('Error blocking/unblocking user', error);
      notifyError('Failed to update user status.');
    }
  };

// delete function
  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/admin/users/delete?userId=${userId}`);
      const updatedUserData = userData.filter(user => user.id !== userId);
      setUserData(updatedUserData);
      notifyDelete(response.data.message);
    } catch (error) {
      // console.error('Error deleting user:', error);
      notifyDeleteError('Failed to delete user.');
    }
  };

  if (loading) {
    return <div><Loading/></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="container userlist">
        <div className="create-user d-flex justify-content-end align-items-center">
          <Link to="create" className="text-decoration-none">
            <button type="button" className='btn btn-primary d-flex gap-2 justify-content-center align-items-center'>
              <i className='bx bx-plus nav_icon'></i>Create User
            </button>
          </Link>
        </div>
        <div className="userlist-table mt-5">
          <table className="table text-start">
            <thead className="table-light">
              <tr>
                <th scope="col">{strings.id}</th>
                <th scope="col">{strings.name}</th>
                <th scope="col">{strings.phone_number}</th>
                <th scope="col">{strings.status}</th>
                <th scope="col">{strings.action}</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.phone_number}</td>
                  <td>{item.is_blocked ? (<span className="badge fs-6 fw-light text-bg-danger">Blocked</span>) : (<span className="badge fs-6 fw-light  text-bg-success">Active</span>)}</td>
                  <td className='d-flex gap-2'>
                    <Link to={`${item.id}`}>
                      <button className='btn btn-outline-success'>
                        <i className='bx bxs-show'></i>
                      </button>
                    </Link>
                    <Link to={`update/${item.id}`}>
                      <button className='btn btn-outline-primary'>
                        <i className='bx bx-edit-alt'></i>
                      </button>
                    </Link>
                    <button className='btn btn-outline-danger' onClick={() => handleDelete(item.id)}>
                      <i className='bx bxs-trash-alt'></i>
                    </button>
                    <div className="form-check form-switch" style={{cursor:"pointer"}}>
                      <input 
                        className="form-check-input form-control ms-2"
                        style={{cursor:"pointer"}} 
                        type="checkbox" 
                        role="switch" 
                        id={`flexSwitchCheckDefault-${item.id}`} 
                        checked={!item.is_blocked}
                        onChange={() => handleBlockToggle(item.id, item.is_blocked)}
                      />
                    </div>

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

export default UserList;
