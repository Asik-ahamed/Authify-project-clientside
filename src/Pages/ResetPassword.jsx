import React, { useContext, useRef, useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const ResetPassword = () => {

  const inputRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);
  const { getUserData, isLoggedIn, userData, backendURL } = useContext(AppContext);

  axios.defaults.withCredentials = true;

   const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    e.target.value = value;
    if(value && index < 5){
      inputRef.current[index + 1].focus();
    }
  }

   const handlekeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0){
          inputRef.current[index - 1].focus();
        }
   }

   const handlePaste = (e) => {
      e.preventDefault();
      const paste = e.clipboardData.getData("text").slice(0,6).split("");
      paste.forEach((digit, i) => {
        if(inputRef.current[i]) {
          inputRef.current[i].value = digit;
        }
      });
      const next = paste.length < 6 ? paste.length : 5;
      inputRef.current[next].focus();
   }

    const onSubmitEmail = async (e) => {
       e.preventDefault();
       setLoading(true);
       try{
        const response = await axios.post(backendURL+"/send-reset-otp?email="+email);
         if(response.status === 200){
               toast.success("Password reset OTP sent successfully.");
               setIsEmailSent(true);
         } else {
          toast.error("Something went wrong, please try again.");
         }
       } catch(error){
        toast.error(error.message);
       } finally {
        setLoading(false);
       }
    }
  
    const handleVerify = () => {
    const otp =  inputRef.current.map((input) => input.value).join("");
    if(otp.length !==6) {
      toast.error("Please enter all 6 digits of the OTP.");
      return;
    }

      setOtp(otp);
      setIsOtpSubmitted(true);
    }

    const onSubmitNewPassword = async(e) => {
      e.preventDefault();
      setLoading(true);
      try{
      const response = await axios.post(backendURL+"/reset-password",{email, otp, newPassword});
      if(response.status === 200){
         toast.success("Password reset successfully.")
         navigate("/login");
      } else{
        toast.error("Something went wrong, please try again.");
      }
      } catch(error) {
        toast.error(error.message);
      } finally{
        setLoading(false);
      }
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-400 relative px-4">
      <Link to="/" className="absolute top-4 left-6 flex items-center space-x-2 text-white">
        <img src={assets.logo_home} alt="logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold">Authify</span>
      </Link>

      {/* Email Input Card */}
      {!isEmailSent && (
        <div className="bg-white rounded-lg p-6 w-full max-w-md text-center shadow-lg">
          <h4 className="text-xl font-bold mb-2">Reset Password</h4>
          <p className="text-gray-600 mb-4">Enter your registered email address</p>
          <form onSubmit={onSubmitEmail} className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <span className="pl-4 text-gray-500"><i className="bi bi-envelope"></i></span>
              <input
                type="email"
                className="w-full px-3 py-3 outline-none rounded-r-full"
                placeholder="Enter email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
        </div>
      )}

      {/* OTP Verification Card */}
      {!isOtpSubmitted && isEmailSent && (
        <div className="bg-white rounded-lg p-6 w-full max-w-md text-center shadow-lg">
          <h4 className="text-xl font-bold mb-2">Email Verify OTP</h4>
          <p className="text-gray-600 mb-4">Enter the 6-digit code sent to your email.</p>
          <div className="flex justify-between gap-2 mb-4">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                ref={(el) => (inputRef.current[i] = el)}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handlekeyDown(e, i)}
                onPaste={handlePaste}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
          <button
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>
        </div>
      )}

      {/* New Password Card */}
      {isOtpSubmitted && isEmailSent && (
        <div className="bg-white rounded-lg p-6 w-full max-w-md text-center shadow-lg">
          <h4 className="text-xl font-bold mb-2">New Password</h4>
          <p className="text-gray-600 mb-4">Enter the new password below</p>
          <form onSubmit={onSubmitNewPassword} className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <span className="pl-4 text-gray-500"><i className="bi bi-person-fill-lock"></i></span>
              <input
                type="password"
                className="w-full px-3 py-3 outline-none rounded-r-full"
                placeholder="***********"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;