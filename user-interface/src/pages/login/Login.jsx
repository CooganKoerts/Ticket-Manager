import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

import { CustomTextField } from '../../components';

import './Login.css';

const Login = ({ handleSubmit }) => (
  <div className="login">
    <form className="form" onSubmit={handleSubmit}>
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
          root: "btn-submit",
          textPrimary: "btn-text"
        }}
      >
        Submit
      </Button>
    </form>
  </div>
);

Login.propTypes = {
  handleSubmit: PropTypes.func,
};

Login.defaultProps = {
  handleSubmit: () => {},
};

export default Login;
