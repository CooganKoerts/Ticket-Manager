const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { 
        email: '',
    };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'Email not found, please check to make sure the email is correct';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'Incorrect Password :(';
    }

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }    

    return errors;
}

module.exports = { handleErrors }