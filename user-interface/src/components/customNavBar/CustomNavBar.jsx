import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './CustomNavBar.css';

// const history = useHistory();
// <Button onClick={() => history.push('/issues')}>Issues</Button>

const CustomNavBar = () => (
  <AppBar className="root navbar" position="static">
    <Toolbar className="toolbar">
      <span className="brand">Ticket Manager</span>
      <IconButton
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

export default CustomNavBar;
