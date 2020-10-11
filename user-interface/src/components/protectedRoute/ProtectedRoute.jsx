import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isUserLoggedIn, component }) => {
  const Component = component;

  return (isUserLoggedIn ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: '/' }} />
  ));
};

ProtectedRoute.propTypes = {
  isUserLoggedIn: PropTypes.bool,
  component: PropTypes.node.isRequired,
};

ProtectedRoute.defaultProps = {
  isUserLoggedIn: false,
};

export default ProtectedRoute;
