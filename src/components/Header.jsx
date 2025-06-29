import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const Header = () => {
  const { userData, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGetStarted = () => {

     if (!isLoggedIn) {
      toast.error('Please login to continue.');
      navigate('/login');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/home-1');
    }, 2500);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col items-center justify-center text-center px-4 py-10 min-h-[80vh]">
      <img src={assets.header} alt="header" className="w-36 mb-6" />
      
      <h5 className="font-semibold text-lg">
        Hey {userData ? userData.name : 'Developer'}{' '}
        <span role="img" aria-label="wave">👋</span>
      </h5>
      
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Welcome to our product
      </h1>
      
      <p className="text-gray-600 text-lg mb-6 max-w-xl">
        Let's start with a quick product tour and you can setup the authentication in no time!
      </p>
      
      <button
        className="border border-gray-800 text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-full transition duration-300"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </div>
  );
};

export default Header;
