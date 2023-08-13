const {checkDuplicateEmail} = require("./Signup");
const {verifyToken} = require("./authJWT");


module.exports = {
    checkDuplicateEmail,
    verifyToken
}