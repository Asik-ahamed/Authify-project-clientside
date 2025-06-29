import React, { useContext, useRef, useState, useEffect } from 'react';
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const Menubar = () => {
  const navigate = useNavigate();
  const { userData, backendURL, setUserData, setIsLoggedIn } = useContext(AppContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(backendURL + '/logout');
      if (response.status === 200) {
        setIsLoggedIn(false);
        setUserData(false);
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const sendVerificationotp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(backendURL + '/send-otp');
      if (response.status === 200) {
        navigate('/email-verify');
        toast.success('OTP has been sent successfully.');
      } else {
        toast.error('Unable to send OTP!');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <nav className="w-full bg-white py-4">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <img src={assets.logo_home} alt="logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-gray-800">Authify</span>
        </div>

        {/* Right - Login or User */}
        {userData ? (
          <div className="relative" ref={dropdownRef}>
            <div
              className="bg-gray-800 text-white rounded-full flex items-center justify-center w-10 h-10 cursor-pointer"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {userData.name[0].toUpperCase()}
            </div>

            {dropdownOpen && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md p-2 z-50">
                {!userData.isAccountVerified && (
                  <div
                    className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded cursor-pointer"
                    onClick={sendVerificationotp}
                  >
                    Verify Email
                  </div>
                )}
                <div
                  className="text-red-500 hover:bg-red-100 px-4 py-2 rounded cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            className="border border-gray-800 text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2"
            onClick={() => navigate('/login')}
          >
            Login <i className="bi bi-arrow-right"></i>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Menubar;
