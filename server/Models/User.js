const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }
    , password: {
        type: String,
        required: true
    },
    cars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car"
    }
    ]
});

module.exports = mongoose.model("User", UserSchema);