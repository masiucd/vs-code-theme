/* eslint-disable import/extensions */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import UserProvider from './context/user/user.state';
import UsersPage from './pages/UsersPage';
import HomePage from './pages/HomePage';
import { Container } from './components/styled/Wrapper';
import NotFound from './pages/NotFound';

function App() {
  return (
    <UserProvider>
      <Layout>
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UsersPage} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Layout>
    </UserProvider>
  );
}

export default App;
