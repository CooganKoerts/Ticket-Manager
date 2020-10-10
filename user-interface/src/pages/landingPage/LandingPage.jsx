import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Register from '../register/RegisterContainer';
import Login from '../login/LoginContainer';
import { CustomTabPanel } from '../../components';

import './LandingPage.css';

const LandingPage = () => {
  const [tab, setTab] = useState("LOGIN_TAB");
  const handleChange = (event, newTabValue) => {
    setTab(newTabValue);
  }

  return (
    <div className="landing-page">
      <Tabs
        value={tab}
        onChange={handleChange}
        variant="fullWidth"
        classes={{
          root: '',
          indicator: ''
        }}
      >
        <Tab id={0} value="LOGIN_TAB" label="Login" />
        <Tab id={1} value="REGISTER_TAB" label="Register" />
      </Tabs>
      <CustomTabPanel id="LOGIN_TAB" value={tab}>
        <Card
          raised={true}
          classes={{
            root: 'card'
          }}
        >
          <Login />
        </Card>
      </CustomTabPanel>
      <CustomTabPanel id="REGISTER_TAB" value={tab}>
        <Card
          raised={true}
          classes={{
            root: 'card'
          }}
        >
          <Register />
        </Card>
      </CustomTabPanel>
    </div>
)};

export default LandingPage;
