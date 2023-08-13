import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../utils";




const initialState: User = {
    name: null
}

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUserAsLogIn(state, action) {
            state.name = action.payload;
        },
        changeUserAsLogOut(state) {
            state.name = null;
        }
    }
})


export const { changeUserAsLogIn, changeUserAsLogOut } = user.actions;
export const userReducer = user.reducer;