const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constants");

verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.cookies["jwt"];
    console.log(token)
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
            req.user = decoded;
            next();
        });
};

module.exports = {
    verifyToken
}