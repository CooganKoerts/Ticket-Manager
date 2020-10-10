import React from 'react';
import Card from '@material-ui/core/Card';

import Register from '../register/RegisterContainer';
import Login from '../login/LoginContainer';

import './LandingPage.css';

const LandingPage = () => (
  <div className="landing-page">
    <Card
      raised={true}
      classes={{
        root: 'card'
      }}
    >
      <Register />
    </Card>

    <Card
      raised={true}
      classes={{
        root: 'card'
      }}
    >
      <Login />
    </Card>
  </div>
);

export default LandingPage;
