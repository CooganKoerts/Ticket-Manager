/* eslint-disable no-new */
// TODO: remove this eslint or find a new way to go about it.
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { loginUser } from '../../../helpers/Api';

import Login from './Login';

const handleSubmit = (values, dispatch) => {
  new Promise((resolve, reject) => {
    if (values) {
      dispatch(loginUser(values));
      resolve(true);
    }
    reject();
  });
};

const mapStateToProps = (state) => ({
  state: state.account,
});

export default reduxForm({
  form: 'login',
  onSubmit: handleSubmit,
})(connect(mapStateToProps)(Login));
