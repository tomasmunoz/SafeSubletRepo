import React from 'react';
import Layout from '../components/Layout';
import UserInfo from '../components/UserInfo';
import UserInfo2 from '../components/UserInfo2';
import { Router, Link } from '@reach/router';

function App({location}) {
  return (
    <Layout>
      <h1>Welcome to the App Page <span>{location.pathname}</span></h1>
      <nav>
        <Link to="/app/info">User Info</Link>
        <Link to="/app/info2">User Info 2</Link>
      </nav>
      <Router>
        <UserInfo path="/app/info" />
        <UserInfo2 path="/app/info2" />
      </Router>
    </Layout>
  );
}
export default App;
