import React,{useState, useEffect} from 'react'
import { API_BASE_URL } from '../../../Api/auth';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import "./style/showsuperadmin.css";
import Loading from '../../../Loading/Loading';


const ShowSuperAdmin = () => {
    const { id } = useParams();
    const [adminData, setAdminData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admin/super-admin?userId=${id}`);
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
              <Link to="/admin/superadmin-management">
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
  

export default ShowSuperAdmin
