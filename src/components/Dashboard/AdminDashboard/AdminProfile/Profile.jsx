import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [userDetails, setUserDetails] = useState();
  const [error, setError] = useState('');
 
  useEffect(() => {
    
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from localStorage
        const response = await axios.get(`http://localhost:5000/user/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Response status code:', response.status);
        console.log('Response Body:', response.data);
        if(response.status===200){
            setUserDetails(response.data.details);

        }
        else{
            console.log("user data not found")
        }
        
      } catch (error) {
        setError('Failed to fetch user details');
      }
    };

    fetchUserDetails();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
    </div>
  );
};

export default Profile;

