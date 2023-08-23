import { createSlice } from "@reduxjs/toolkit";
import {  Car } from "../../utils";




const initialState: {cars:Car[]} = {
    cars:[]
}

const cars = createSlice({
    name: "cars",
    initialState,
    reducers: {
        addCar(state, action) {
            state.cars.push = action.payload;
        },
        removeCar(state,action) {
            const {name,price,contactNumber,color,model} = action.payload; // these are id for a specific car
            const notFilteredCars = state.cars.filter(car=>{
                return car.color !== color && car.name !== name && car.contactNumber !== contactNumber && car.model !== model && car.price !== price;
            })
            state.cars = notFilteredCars;
        },
        setCars(state, action) {
            const cars = action.payload;
            state.cars = cars;
        },

    }
})


export const { addCar, removeCar, setCars } = cars.actions;
export const carsReducer = cars.reducer;