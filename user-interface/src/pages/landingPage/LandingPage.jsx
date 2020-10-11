import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Toolar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';

import AccountAuth from '../../account/AccountAuth';

import './LandingPage.css';

const LandingPage = ({ isUserLoggedIn }) => (
  <div className="landing-page">
    <AppBar className="navbar" position="static">
      <Toolbar>
        <span className="navbar-brand">Ticket Manager</span>
      </Toolbar>
    </AppBar>
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
