import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { CustomNavBar } from '../../components';
import AccountAuth from '../../elements/account/authorization/AccountAuth';

import './LandingPage.css';
import { Button } from '@material-ui/core';

const LandingPage = ({ isUserLoggedIn }) =>
  (
    <div className="landing-page">
      { !isUserLoggedIn ? (
        <AccountAuth />
      ) : (
        <CustomNavBar />
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
