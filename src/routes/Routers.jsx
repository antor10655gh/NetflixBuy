import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Doctors from '../views/doctors/Doctors'
import DoctorDetails from '../views/doctors/DoctorDetails'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Contact from '../views/Contact'
import Services from '../views/Services'

const Routers = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/doctors/:id" element={<DoctorDetails />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
   </Routes>
  )
}

export default Routers