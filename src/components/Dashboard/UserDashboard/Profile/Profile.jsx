
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../Contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [phone_number, setPhoneNumber] = useState(localStorage.getItem('phone_number') || '');
 
console.log(name);
console.log(phone_number);
  useEffect(() => {
    if (user) {
      localStorage.setItem('name', user.name);
      localStorage.setItem('phone_number', user.phone_number);
     
      setName(user.name);
      setPhoneNumber(user.phone_number);
      
    }
  }, [user]);


  return (
    <div>
      <h1>this is user profile</h1>
      <p>Name:{name}</p>
      <p>Phone Number: {phone_number}</p>
    </div>
  )
}

export default Profile

