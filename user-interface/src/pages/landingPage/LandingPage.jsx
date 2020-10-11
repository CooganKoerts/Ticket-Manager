import AppBar from '@material-ui/core/AppBar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';

import AccountAuth from '../../elements/account/authorization/AccountAuth';

import './LandingPage.css';

const LandingPage = ({ isUserLoggedIn }) => (
  <div className="landing-page">
    { !isUserLoggedIn ? (
      <AccountAuth />
    ) : (
      <AppBar className="navbar" position="static">
        <Toolbar className="navbar-toolbar">
          <span className="navbar-brand">Ticket Manager</span>
          <IconButton
            classes={{
              root: 'btn-icon'
            }}
          >
            <AccountCircleIcon 
              classes={{
                root: 'account-icon'
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
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
