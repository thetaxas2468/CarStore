const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JWT_SECRET, ALGORITHM } = require("../constants");
const User = require("../Models/User");

const signup = async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        cars: []
    });
    try {
        await user.save();
    }
    catch (err) {
        res.status(500).json({ error: err });
        return;
    }
    return res.send();
};

const signin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ error: "User Not found." });
        }
        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).json({
                token: null,
                error: "Invalid Password!"
            });
        }
        const token = jwt.sign({ id: user.id },
            JWT_SECRET,
            {
                algorithm: ALGORITHM,
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
            });
        res.cookie("jwt", token, { httpOnly: false, maxAge: 1000 * 60 * 60 * 3, withCredentials: true });
        res.cookie("email", user.email, { httpOnly: false, maxAge: 1000 * 60 * 60 * 3, withCredentials: true })
        res.status(200).json({
            id: user._id,
            email: user.email,
            token: token,
            error: ""
        });
    }
    catch (err) {
        res.status(500).json({ error: err });
        return;
    }

};

const logout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 })
    res.cookie("email", "", { maxAge: 1 })
    return res.send();
}


module.exports = {
    signin, signup, logout
}