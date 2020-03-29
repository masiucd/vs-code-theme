/* eslint-disable import/extensions */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import UserProvider from './context/user/user.state';
import UsersPage from './pages/UsersPage';
import HomePage from './pages/HomePage';
import { Container } from './components/styled/Wrapper';

function App() {
  return (
    <UserProvider>
      <Layout>
        <Switch>
          <Container>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UsersPage} />
          </Container>
        </Switch>
      </Layout>
    </UserProvider>
  );
}

export default App;
