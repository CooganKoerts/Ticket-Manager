import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react';
import { useHistory } from 'react-router-dom';

import './CustomNavBar.css';

const CustomNavBar = () => {
  const history = useHistory();

  return (
    <AppBar className="root navbar" position="static">
      <Toolbar className="toolbar">
        <span className="brand" onClick={() => history.push('/')}>Ticket Manager</span>
        <span className="my-projects" onClick={() => history.push('/projects')}>My Projects</span>
        {/* <span className="my-work" onClick={() => history.push('/issues')}>My Work</span> */}
        <IconButton
          onClick={() => history.push('/account')}
          classes={{
            root: 'btn-icon',
          }}
        >
          <AccountCircleIcon
            classes={{
              root: 'account-icon',
            }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavBar;
