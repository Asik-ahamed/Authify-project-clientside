import React from 'react'
import './App.css'
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import EmailVerify from './Pages/EmailVerify';
import ResetPassword from './Pages/ResetPassword';
import Home1 from './Pages/Home1';
import Doctors from './Pages/Doctors';
import Login1 from './Pages/Login1';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MyProfile from './Pages/MyProfile';
import MyAppointment from './Pages/MyAppointment';
import Appointment from './Pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';





const App = () => {

    const location = useLocation();
    const hideLayoutRoutes = ['/','/login','/email-verify','/reset-password'];
    const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className={ shouldHideLayout ? '' : 'mx-4 sm:mx-[10%]'}>
       <ToastContainer />
      { !shouldHideLayout && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email-verify' element={<EmailVerify />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/home-1' element={<Home1 />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login-1' element={<Login1 />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointment />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
      { !shouldHideLayout && <Footer />}
    </div>
  )
}

export default App