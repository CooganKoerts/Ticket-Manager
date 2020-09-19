import React from 'react';
import Register from './Register';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

const handleSubmit = (values, dispatch, props) => {
    console.log(values);
}

const mapStateToProps = (state) => {
    return {
        state: state.data
    }
}

export default reduxForm({
    form: 'registration',
    onSubmit: handleSubmit,
})(connect(mapStateToProps)(Register));