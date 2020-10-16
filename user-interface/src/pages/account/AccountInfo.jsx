import Card from '@material-ui/core/Card';
import React from 'react';

import { CustomNavBar } from '../../components';

import './AccountInfo.css';

const AccountInfo = ({ user }) => (
  <>
    <CustomNavBar />
    <div className="account-info">
      <Card className="account-card" raised>
        <span>
          <b>Firstname:</b>
          {' '}
          {user.firstname}
        </span>
        <span>
          <b>Lastname:</b>
          {' '}
          {user.lastname}
        </span>
        <span>
          <b>Email: </b>
          {user.email}
        </span>
        <span>
          <b>Username: </b>
          {user.username}
        </span>
      </Card>
    </div>
  </>
);

export default AccountInfo;
