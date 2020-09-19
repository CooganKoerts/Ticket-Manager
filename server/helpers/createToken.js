const jwt = require('jsonwebtoken');
const { TOKEN_MAX_AGE } = process.env;

const createToken = (id) => {
    return jwt.sign({ id }, 'access-validation-id', {
        expiresIn: TOKEN_MAX_AGE
    });
};

module.exports = { createToken };