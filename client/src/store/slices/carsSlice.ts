import { createSlice } from "@reduxjs/toolkit";
import {  carFormInitalStateType } from "../../utils";




const initialState: {cars:carFormInitalStateType[]} = {
    cars:[]
}

const cars = createSlice({
    name: "user",
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
    }
})


export const { addCar, removeCar } = cars.actions;
export const carsReducer = cars.reducer;