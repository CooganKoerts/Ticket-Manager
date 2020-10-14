const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.headers["access-validation-id"] || null;

    try {
        if (token) {
            jwt.verify(token, 'access-validation-id', (err) => {
                if (err) {
                    res.status(500);
                    console.log(err);
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