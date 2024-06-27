import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Temperature from "./Temperature"
import Humidity from "./Humidity/Humidity"
import Profile from '../Profile/Profile'
import NoPage from '../../../NoPage/NoPage'


const MainPage = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="temperature" element={<Temperature/>}/>
      <Route path="humidity" element={<Humidity/>}/>     
      <Route path="profile/:id" element={<Profile/>}/>
      <Route path="*" element={<NoPage/>}/> 
    </Routes>
   

    </>
  )
}

export default MainPage
