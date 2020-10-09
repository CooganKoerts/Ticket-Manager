/* eslint-disable jsx-a11y/label-has-associated-control */
// TODO: remove this eslint or find a new way to go about it.
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const Register = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>First Name</label>
      <div id="firstname">
        <Field
          name="firstname"
          component="input"
          type="text"
          placeholder="First Name"
        />
      </div>
    </div>
    <div>
      <label>Last Name</label>
      <div>
        <Field
          name="lastname"
          component="input"
          type="text"
          placeholder="Last Name"
        />
      </div>
    </div>
    <div>
      <label>Username</label>
      <div>
        <Field
          name="username"
          component="input"
          type="text"
          placeholder="Username"
        />
      </div>
    </div>
    <div>
      <label>Email</label>
      <div>
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="Email"
        />
      </div>
    </div>
    <div>
      <label>Password</label>
      <div>
        <Field
          name="password"
          component="input"
          type="text"
          placeholder="Password"
        />
      </div>
    </div>
    <button type="submit" onSubmit={handleSubmit}>Submit</button>
  </form>
);

Register.propTypes = {
  handleSubmit: PropTypes.func,
};

Register.defaultProps = {
  handleSubmit: () => {},
};

export default Register;
