import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import PropertyList from './PropertyList';
import reportWebVitals from '../../reportWebVitals';

function Layout({children}) {
  return (
    <body class="bg-gray-200">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></script>
      <Navbar/>
      <Header/>
      <PropertyList/>
      <main>
        {children}
      </main>
    </body>
  );
}

export default Layout;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
