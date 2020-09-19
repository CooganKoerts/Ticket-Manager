const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const { cookies } = res;

    try {
        if (cookies && cookies.token) {
            const token = cookies.token;
            jwt.verify(token, 'access-validation-id', (err, decodedToken) => {
                if (err) {
                    res.status(500);
                    throw Error(err.message)
                } else {
                    next();
                }
            });
        } else {
            res.status(401)
            throw Error('No Token - Unauthorized access');
        }        
    } catch (err) {
        res.status(res.statusCode || 500);
        res.send(err.message);
    }
};

module.exports = { requireAuth };