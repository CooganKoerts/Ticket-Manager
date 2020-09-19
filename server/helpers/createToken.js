const jwt = require('jsonwebtoken');
const { TOKEN_MAX_AGE } = process.env;

const createToken = (id) => {
    return jwt.sign({ id }, 'server secret', {
        expiresIn: TOKEN_MAX_AGE
    });
};

module.exports = { createToken };