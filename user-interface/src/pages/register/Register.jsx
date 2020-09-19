import React from 'react';
import { Field } from 'redux-form'

const Register = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
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
            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
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
                        name="Password"
                        component="input"
                        type="text"
                        placeholder="Password"
                    />
                </div>
            </div>
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
    );
}
 
export default Register;