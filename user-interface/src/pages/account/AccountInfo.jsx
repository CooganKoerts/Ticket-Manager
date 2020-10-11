import Card from '@material-ui/core/Card';
import React from 'react';

import './AccountInfo.css';

const AccountInfo = ({ user }) => (
  <Card className="account-card">
    <span>{user.firstname}</span>
    <span>{user.lastname}</span>
    <span>{user.email}</span>
    <span>{user.username}</span>
  </Card>
);

export default AccountInfo;
