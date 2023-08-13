const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CarSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    model: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
});

Car.pre("save", async (next) => {
    const car = this;
    try {
        const existingCar = await User.findOne({ name: car.name,price:car.price,model:car.model,color:car.color,contactNumber:car.contactNumber});
        if (existingCar) {
            const error = new Error('Car like this already exists.');
            return next(error);
        }
        next();
    } catch (error) {
        next(error);
    }
})

module.exports = mongoose.model("Car", CarSchema);