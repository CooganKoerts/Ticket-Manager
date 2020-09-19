import React from 'react';
import { Field } from 'redux-form'

const Register = () => {
    return (
        <form>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Register;