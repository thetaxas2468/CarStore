const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../constants");

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ error: "No token provided!" });
    }

    jwt.verify(token,
        JWT_SECRET,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    error: "Unauthorized!",
                });
            }
            req.userId = decoded.id;
            next();
        });
};

module.exports = {
    verifyToken
}