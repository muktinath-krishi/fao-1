import React,{useState, useEffect} from 'react'
import { API_BASE_URL } from '../../../Api/auth';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Loading from "../../../Loading/Loading"
import "./showadmin.css"


const ShowAdmin = () => {
    const { id } = useParams();
    const [adminData, setAdminData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admin/admins?userId=${id}`);
        setAdminData(response.data.admin);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch admin data.');
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [id]);

  if (loading) {
    return <div><Loading/></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="adminlist">
        <div className="adminlist-content mt-5">
            <div className="back-btn mb-2">
              <Link to="/admin/admin-management">
                <i className='bx bx-arrow-back' ></i>
              </Link>
            </div>
            <div>
                <h1>Admin Profile</h1>
                <p>Name: {adminData.name}</p>
                <p>Email: {adminData.email}</p>
            </div> 
        </div>
      </div>
    </>
  );
}
  

export default ShowAdmin
