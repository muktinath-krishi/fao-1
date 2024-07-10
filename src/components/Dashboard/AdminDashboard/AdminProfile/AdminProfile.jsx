
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../Contexts/AuthContext'

const AdminProfile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [role, setRole] = useState(localStorage.getItem('role') || '');
 

  useEffect(() => {
    if (user) {
      localStorage.setItem('name', user.name);
      localStorage.setItem('email', user.email);
      localStorage.setItem('role', user.role);

      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
  }, [user]);


  return (
    <div>
      <h1>this is <span className='text-success'>{role}</span> profile</h1>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}

export default AdminProfile

