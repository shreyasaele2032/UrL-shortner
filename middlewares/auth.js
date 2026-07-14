const { getUser } = require("../service/auth");

function restrictToLoggedInUserOnly(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/user/login");
    }

    const user = getUser(token);

    if (!user) {
        return res.redirect("/user/login");
    }

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUserOnly,
};