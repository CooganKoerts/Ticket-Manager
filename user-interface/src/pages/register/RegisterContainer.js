import React from 'react';
import Register from './Register';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { registerUser } from '../../helpers/Api';

const handleSubmit = (values, dispatch) => {
    new Promise((resolve, reject) => {
        if (values) {
            console.log('Values Exist!')
            dispatch(registerUser(values));
            resolve(true);
        }
        reject();
    });
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        state: state.data
    }
}

export default reduxForm({
    form: 'registration',
    onSubmit: handleSubmit,
})(connect(mapStateToProps)(Register));