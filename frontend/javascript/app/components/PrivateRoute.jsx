import React from 'react'
import { Redirect, Route } from 'react-router-dom';

// Renders the link if there is an jwt token in the sessionStorage otherwise redirect to login page
// Assign the prop component to Component to follow JSX custom component standard
// Assign the rest of the props to the rest variable
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !!sessionStorage.jwt
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);