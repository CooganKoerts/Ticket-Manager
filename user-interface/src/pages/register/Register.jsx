/* eslint-disable jsx-a11y/label-has-associated-control */
// TODO: remove this eslint or find a new way to go about it.
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import './Register.css'

const Register = ({ handleSubmit }) => (
  <div className="register">
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-item">
        <label>First Name:</label>
        <Field
          name="firstname"
          component="input"
          type="text"
          placeholder="First Name"
        />
      </div>
      <div className="form-item">
        <label>Last Name:</label>
        <Field
          name="lastname"
          component="input"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="form-item">
        <label>Username:</label>
        <Field
          name="username"
          component="input"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="form-item">
        <label>Email:</label>
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="form-item">
        <label>Password:</label>
        <Field
          name="password"
          component="input"
          type="text"
          placeholder="Password"
        />
      </div>
      <button className="submit" type="submit" onSubmit={handleSubmit}>Submit</button>
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
