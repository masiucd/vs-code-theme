/* eslint-disable import/extensions */
import React from 'react';
import Layout from './components/layout/Layout';
import UserProvider from './context/user/user.state';


function App() {
  return (
    <UserProvider>
      <Layout>
        <h1>apa</h1>
      </Layout>
    </UserProvider>
  );
}

export default App;
