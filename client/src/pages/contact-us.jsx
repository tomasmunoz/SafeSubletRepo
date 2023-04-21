import React from 'react';
import Layout from '../components/Layout';

function Marketing({location}) {
  return (
    <Layout>
      <h1>Contact Page <span>{location.pathname}</span></h1>
      <h2>Static HTML Page</h2>
      <p>Contact Us</p>
    </Layout>
  )
}

export default Marketing;
