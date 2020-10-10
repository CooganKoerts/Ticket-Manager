import React from 'react';
import Card from '@material-ui/core/Card';

import Register from '../register/RegisterContainer';

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
  </div>
);

export default LandingPage;
