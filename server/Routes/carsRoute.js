const router = require("express").Router();
const { createCar, findCar, removeCar, getAllCars } = require("../Controllers/carsController");
const { checkDuplicateCar, verifyToken } = require("../Middlewares/index");

router.post("/createcar", [verifyToken, checkDuplicateCar], createCar);
router.get("/findcar", findCar);
router.get("/removecar", removeCar);
router.get("/getcars", getAllCars);


module.exports = router;