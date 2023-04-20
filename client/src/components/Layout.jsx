import React from 'react';
import Navbar from './Navbar';
import './Layout.css';

function Layout({children}) {
  return (
    <>
      <Navbar/>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;

import reportWebVitals from '../reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
