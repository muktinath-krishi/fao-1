import React,{useState, useEffect} from 'react'
import { API_BASE_URL } from '../../../Api/auth';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Loading from '../../../Loading/Loading';


const ShowUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const response = await axios.get(`${API_BASE_URL}/admin/users?userId=${id}`);
        setUserData(response.data.user);

        setLoading(false);
      } catch (error) {
        setError('Failed to fetch user data.');
        setLoading(false);
      }
    };

    fetchUserData();
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
              <Link to="/admin/user-management">
                <i className='bx bx-arrow-back' ></i>
              </Link>
            </div>
            <div>
                <h1>User Profile</h1>
                <p>Name: {userData.name}</p>
                <p>Phone Number: {userData.phone_number}</p>
            </div> 
        </div>
      </div>
    </>
  );
}
  

export default ShowUser
