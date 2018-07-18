import React from 'react'
import { Redirect, Route } from 'react-router-dom';

// Renders the link if there is an jwt token in the sessionStorage otherwise redirect to login page
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !!sessionStorage.jwt
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);