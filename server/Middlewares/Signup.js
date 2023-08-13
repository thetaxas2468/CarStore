const User = require("../Models/User");

checkDuplicateEmail = async (req, res, next) => {
    const user = await User.findOne({
        email: req.body.email
    }).catch(err => {
        res.status(400).json({ error: "Error has occurred!" });
        return;
    })
    if (user) {
        res.status(400).json({ error: "Failed! Email is already in use!" });
        return;
    }
    next();
};



module.exports = {
    checkDuplicateEmail
}