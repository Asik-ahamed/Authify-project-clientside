import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { backendURL, setIsLoggedIn, getUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    setLoading(true);
    try {
      if (isCreateAccount) {
        const response = await axios.post(`${backendURL}/register`, { name, email, password });
        if (response.status === 201) {
          navigate('/');
          toast.success('Account created successfully.');
        } else {
          toast.error('Email already exists');
        }
      } else {
        const response = await axios.post(`${backendURL}/login`, { email, password });
        if (response.status === 200) {
          setIsLoggedIn(true);
          getUserData();
          navigate('/');
        } else {
          toast.error('Email/Password incorrect');
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 to-indigo-400">
      {/* Top-left logo */}
      <div className="absolute top-5 left-6 flex items-center space-x-2">
        <Link to="/" className="flex items-center gap-2 text-white text-xl font-bold">
          <img src={assets.logo_home} alt="logo" className="w-12 h-12" />
          <span className="text-white text-2xl font-semibold">Authify</span>
        </Link>
      </div>

      {/* Card */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isCreateAccount ? 'Create Account' : 'Login'}
        </h2>

        <form onSubmit={onSubmitHandler} autoComplete="off" className="space-y-4">
          {isCreateAccount && (
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Id
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <Link to="/reset-password" className="text-indigo-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
          >
            {loading ? 'Loading...' : isCreateAccount ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          {isCreateAccount ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setIsCreateAccount(false)}
                className="text-indigo-600 hover:underline cursor-pointer"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{' '}
              <span
                onClick={() => setIsCreateAccount(true)}
                className="text-indigo-600 hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
