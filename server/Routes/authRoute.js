const router = require("express").Router();
const { signin, signup, logout } = require("../Controllers/authController");
const { checkDuplicateEmail } = require("../Middlewares/index");

router.post("/signup",[checkDuplicateEmail],signup);
router.post("/signin",signin);
router.get("/logout",logout);


module.exports = router;