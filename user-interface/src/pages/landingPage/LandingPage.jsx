import Card from '@material-ui/core/Card';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { CustomTabPanel } from '../../components';
import Login from '../login/LoginContainer';
import Register from '../register/RegisterContainer';

import './LandingPage.css';

const LandingPage = ({ isUserLoggedIn }) => {
  const [tab, setTab] = useState('LOGIN_TAB');
  const loginTabClassname = Classnames({ 'tab-selected': tab === 'LOGIN_TAB' });
  const registerTabClassname = Classnames({ 'tab-selected': tab === 'REGISTER_TAB' });
  const handleChange = (event, newTabValue) => {
    setTab(newTabValue);
  };

  return (
    <div className="landing-page">
      { !isUserLoggedIn && (
      <Card
        raised
        classes={{
          root: 'card',
        }}
      >
        <Tabs
          value={tab}
          onChange={handleChange}
          variant="fullWidth"
          classes={{
            root: 'tabs-root',
            indicator: 'tabs-indicator',
          }}
        >
          <Tab
            id={0}
            value="LOGIN_TAB"
            label="Login"
            classes={{
              root: loginTabClassname,
            }}
          />
          <Tab
            id={1}
            value="REGISTER_TAB"
            label="Register"
            classes={{
              root: registerTabClassname,
            }}
          />
        </Tabs>
        <CustomTabPanel id="LOGIN_TAB" value={tab}>
          <Login />
        </CustomTabPanel>
        <CustomTabPanel id="REGISTER_TAB" value={tab}>
          <Register />
        </CustomTabPanel>
      </Card>
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
