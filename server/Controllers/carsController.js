const User = require("../Models/User");
const Cars = require("../Models/Car");
// for all await do try and catch

const findCar = async (req, res) => {
    // need to validate car details
    const { name, price, contactNumber, color, model } = req.body;
    if(!(name && price && contactNumber && color &&model)){
        return res.status(400).json({error:"Missing details!"})
    }
    const result = await Cars.find({
        name, price, contactNumber, color, model
    })
    if (!result) {
        return res.status(400).json({ error: "Car is not found!" })
    }
    return res.json({ result });
}

const getAllCars = async (req, res) => {
    console.log(req.user)
    const cars = await Cars.find();
    return res.json({ result: cars });
}

const createCar = async (req, res) => {
    // need to validate token and validate car details
    const { name, price, contactNumber, color, model, image } = req.body;
    const userId = req.userId;
    const user= req.user;
    const UserToAddCar = await User.findOne({ _id: userId })
    if (UserToAddCar) {
        const Car = await Cars.insertOne({ name, price, contactNumber, color, model, image, owner: UserToAddCar });
        await UserToAddCar.cars.push(Car);
        await UserToAddCar.save();
        return res.status(200).json({ result: "Car has been added" });
    }
    return res.status(400).json({ error: "Failed to identify and create the car" })
}
// Only the owner of the car can delete his car and need to checkthe validation of the token.
const removeCar = async (req, res) => {
    const { id } = req.body;
    const result = await Cars.find({
        _id: id
    })
    if (!result) {
        return res.status(400).send();
    }
    if (result.owner === req.userId) {
        // remove the car
        await Cars.findByIdAndRemove(id);
        return res.status(200).res();
    }
    return res.status(401).json({ error: "This is not your car!" })

}


module.exports = {
    findCar,
    getAllCars,
    createCar,
    removeCar,

}