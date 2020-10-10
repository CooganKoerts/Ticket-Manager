/* eslint-disable no-new */
// TODO: remove this eslint or find a new way to go about it.
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { registerUser } from '../../helpers/Api';

import Register from './Register';

const handleSubmit = (values, dispatch) => {
  new Promise((resolve, reject) => {
    if (values) {
      dispatch(registerUser(values));
      resolve(true);
    }
    reject();
  });
};

const mapStateToProps = (state) => ({
  state: state.data,
});

export default reduxForm({
  form: 'registration',
  onSubmit: handleSubmit,
})(connect(mapStateToProps)(Register));
