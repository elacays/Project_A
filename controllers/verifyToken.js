const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    const token = req.cookies.token;
    console.log(token)
    if (!token) return res.status(401).send('Acces Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next()
    } catch (err) {
        res.status(400).send('invalid token');

    }


}











/*const requireAuth = (req, res, next) => {
    const token = req.cookie.jwt;

    if (token) {
        jwt.verify(token, 'auth-token', (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.redirect('/');
            } else {
                console.log(decodedToken)
                next();
            }
        })
    } else {
        res.redirect('/');

    }
};

const checkUser = (res, req, next) => {
    const token = req.cookie.jwt;
    console.log("token:" + token);

    if (token) {
        jwt.verify(token, 'auth-token', async (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.locals.user = null;
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken._id);
                res.locals.user = user;
                next()
            }
        })
    } else {

        next()
    }
    console.log(res.locals);

}

module.exports = { requireAuth, checkUser }*/