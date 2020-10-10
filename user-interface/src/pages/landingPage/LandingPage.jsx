import PropTypes from 'prop-types';
import React from 'react';

import AccountAuth from '../../account/AccountAuth';

import './LandingPage.css';

const LandingPage = ({ isUserLoggedIn }) => (
  <div className="landing-page">
    { !isUserLoggedIn && (
    <AccountAuth />
    )}
  </div>
);

LandingPage.propTypes = {
  isUserLoggedIn: PropTypes.bool,
};

LandingPage.defaultProps = {
  isUserLoggedIn: false,
};

export default LandingPage;
