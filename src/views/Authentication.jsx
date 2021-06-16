import React from 'react';
import { Route } from 'react-router-dom';
import AuthContainer from '../components/Auth/AuthContainer';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import Layout from '../components/Layout/Layout';

const Authentication = (props) => {
  document.title = 'Sneaker City - Authentication';

  return (
    <Layout>
      <Route exact path="/login">
        <AuthContainer title="Login">
          <Login {...props} />
        </AuthContainer>
      </Route>
      <Route exact path="/signup">
        <AuthContainer title="Signup">
          <Signup {...props} />
        </AuthContainer>
      </Route>
    </Layout>
  );
};

export default Authentication;
