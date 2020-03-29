/* eslint-disable import/extensions */
import React from 'react';
import Layout from './components/layout/Layout';
import UserProvider from './context/user/user.state';
import Users from './components/users/Users';


function App() {
  return (
    <UserProvider>
      <Layout>
        <Users />
      </Layout>
    </UserProvider>
  );
}

export default App;
