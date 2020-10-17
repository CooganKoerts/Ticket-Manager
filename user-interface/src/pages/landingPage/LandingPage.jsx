import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { CustomNavBar } from '../../components';
import AccountAuth from '../../elements/account/authorization/AccountAuth';

import './LandingPage.css';

const LandingPage = ({ isUserLoggedIn }) => {
  const className = ClassNames("landing-page", { "logged-in": isUserLoggedIn });
  return (
    <div className={className}>
      { !isUserLoggedIn ? (
        <>
          <span className="title">Ticket Manager</span>
          <AccountAuth />
        </>
      ) : (
        <CustomNavBar />
      )}
    </div>
  );
};

LandingPage.propTypes = {
  isUserLoggedIn: PropTypes.bool,
};

LandingPage.defaultProps = {
  isUserLoggedIn: false,
};

export default LandingPage;
