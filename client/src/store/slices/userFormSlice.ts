import { initUserFormState } from "../../utils";
import { reset } from "../actions";
import {createSlice} from "@reduxjs/toolkit";



const initialState: initUserFormState = {
    email:"",
    password:"",
}

const userForm = createSlice({
    name:"userForm",
    initialState,
    reducers:{
        changeEmail(state,action){
            state.email=action.payload;
        },
        changePassword(state,action){
            state.password = action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(reset,(state,action)=>{
            state.email="";
            state.password="";
        })
    }
})

export const {changeEmail,changePassword} = userForm.actions;
export const userFormReducer = userForm.reducer;