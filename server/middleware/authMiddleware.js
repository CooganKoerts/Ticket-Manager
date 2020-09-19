const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        console.log('TOKEN EXISTS');
        jwt.verify(token, 'koert\'s secret', (err, decodedToken) => {
            if (err) {
                console.log('ERROR');
            } else {
                console.log('SUCCESS');
                console.log(decodedToken);
                next();
            }
        });
    } else {
        console.log('NO TOKEN');
    }
};

module.exports = { requireAuth };