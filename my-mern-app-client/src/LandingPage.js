import React from 'react';
import logo from './Logo2.png';
import './App.css';


function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <img src={logo} className="LandingPage-logo" alt="logo" />
        <p>
          Rent your flat or room to people close to you.
        </p>
      </header>
    </div>
  );
}

export default LandingPage;
