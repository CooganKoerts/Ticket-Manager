import React from 'react';
import Register from './Register';
import { reduxForm } from 'redux-form'


export default reduxForm({
    form: 'registration'
})(Register);