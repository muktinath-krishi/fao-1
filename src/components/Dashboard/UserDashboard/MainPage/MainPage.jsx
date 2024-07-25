import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Temperature from "./Temperature"
import Humidity from "./Humidity/Humidity"
import NoPage from '../../../NoPage/NoPage'
import UserProfile from '../Profile/UserProfile'


const MainPage = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="temperature" element={<Temperature/>}/>
      <Route path="humidity" element={<Humidity/>}/>     
      <Route path="profile/:id" element={<UserProfile/>}/>
      <Route path="*" element={<NoPage/>}/> 
    </Routes>
   

    </>
  )
}

export default MainPage
