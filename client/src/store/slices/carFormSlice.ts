import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";
import {  Car } from "../../utils";


const initialState:Car = {
    _id:"",
    name:"",
    image:"",
    price:0,
    contactNumber:"",
    model:0,
    color:"",
}

const carForm = createSlice({
    name:"carForm",
    initialState,
    reducers:{
        changeCarNameForm(state,action){
            state.name = action.payload;
        },
        changeCarPriceForm(state,action){
            state.price = action.payload;
        },
        changeCarModelForm(state,action){
            state.model = action.payload;
        },
        changeCarColorForm(state,action){
            state.color = action.payload;
        },
        changeCarContactNumberForm(state,action){
            state.contactNumber = action.payload;
        },
        changeCarImageForm(state,action){
            state.image = action.payload;
        },
    },
    extraReducers(builder){
        builder.addCase(reset,(state,action)=>{
            state.name=""
            state.color=""
            state.contactNumber=""
            state.image=""
            state.price=0
            state.model=0
        })
    }
})


export const {changeCarColorForm,changeCarContactNumberForm,changeCarImageForm,changeCarModelForm,changeCarNameForm,changeCarPriceForm} = carForm.actions;
export const carFormReducer = carForm.reducer;