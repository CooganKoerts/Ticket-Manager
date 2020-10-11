import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

import { CustomTextField } from '../../../components';

import './Register.css';

const Register = ({ handleSubmit }) => (
  <div className="register">
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-item">
        <Field
          name="firstname"
          component={CustomTextField}
          label="Firstname"
          type="text"
          placeholder="First Name"
        />
      </div>
      <div className="form-item">
        <Field
          name="lastname"
          component={CustomTextField}
          label="Lastname"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="form-item">
        <Field
          name="username"
          component={CustomTextField}
          label="Username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="form-item">
        <Field
          name="email"
          component={CustomTextField}
          label="Email"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="form-item">
        <Field
          name="password"
          component={CustomTextField}
          label="Password"
          type="text"
          placeholder="Password"
        />
      </div>
      <Button
        color="primary"
        className="submit"
        type="submit"
        onSubmit={handleSubmit}
        classes={{
          root: 'btn-submit',
          textPrimary: 'btn-text',
        }}
      >
        Submit
      </Button>
    </form>
  </div>
);

Register.propTypes = {
  handleSubmit: PropTypes.func,
};

Register.defaultProps = {
  handleSubmit: () => {},
};

export default Register;
