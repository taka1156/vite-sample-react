import React from 'react';
import './Top.css';

const View = () => {
  return (
    <>
      <h2>Top</h2>
      <div className="logo">
        <div className="logo__box">
          <div className="logo__pulse logo__pulse--vite"></div>
          <img className="logo__img" src="img/vite-logo.svg" />
        </div>
        <div className="logo__box">
          <div className="logo__pulse logo__pulse--react"></div>
          <img className="logo__img" src="img/react-logo.svg" />
        </div>
      </div>
    </>
  );
};

export default View;
