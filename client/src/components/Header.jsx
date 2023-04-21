import React from 'react';
import '../assets/css/material-kit.css?v=3.0.4';
import '../assets/css/nucleo-icons.css'

function Header() {
  return (
    <header class="bg-gradient-dark">
      <div class="page-header min-vh-75">
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center mx-auto my-auto">
              <h1 class="text-white">Work with an amazing design</h1>
              <p class="lead mb-4 text-white opacity-8">We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game</p>
              <button type="submit" class="btn bg-white text-dark">Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
