const router = require("express").Router();
const { createCar, findCar, removeCar, getAllCars } = require("../Controllers/carsController");
const { checkDuplicateCar, verifyToken } = require("../Middlewares/index");

router.post("/createcar", [verifyToken, checkDuplicateCar], createCar);
router.get("/findcar",[verifyToken], findCar);
router.get("/removecar",[verifyToken], removeCar);
router.get("/getcars",[verifyToken], getAllCars);


module.exports = router;