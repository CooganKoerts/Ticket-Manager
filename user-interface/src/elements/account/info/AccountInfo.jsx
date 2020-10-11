import Card from '@material-ui/core/Card';
import React from 'react';

const AccountInfo = ({
  firstname, lastname, email, username,
}) => (
  <Card>
    <span>{firstname}</span>
    <span>{lastname}</span>
    <span>{email}</span>
    <span>{username}</span>
  </Card>
);

export default AccountInfo;
