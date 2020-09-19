const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { 
        email: '',
    };

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }    

    return errors;
}

module.exports = { handleErrors }