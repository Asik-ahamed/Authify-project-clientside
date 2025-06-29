import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/paper-plane-loader.json';

const Loader = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Lottie animationData={animationData} loop={true} style={{ width: 200, height: 200 }} />
    </div>
  );
};

export default Loader;
