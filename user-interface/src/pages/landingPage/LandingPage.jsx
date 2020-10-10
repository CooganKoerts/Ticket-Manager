import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';

import Register from '../register/RegisterContainer';

import './LandingPage.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1769aa',
    },
    error: {
      main: '#ff9300',
    },
  },
});

const LandingPage = () => (
  <div className="landing-page">

    <MuiThemeProvider theme={theme}>
      <Register />
    </MuiThemeProvider>

  </div>
);

export default LandingPage;
