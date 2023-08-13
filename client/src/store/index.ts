import { configureStore } from "@reduxjs/toolkit"; 
import { changeEmail,changePassword,userFormReducer } from "./slices/userFormSlice";
import { reset } from "./actions";
import { userReducer,changeUserAsLogIn,changeUserAsLogOut } from "./slices/userSlice";
import {carFormReducer, changeCarColorForm,changeCarContactNumberForm,changeCarImageForm,changeCarModelForm,changeCarNameForm,changeCarPriceForm} from "./slices/carFormSlice";
import { addCar,removeCar,carsReducer } from "./slices/carsSlice";

const store= configureStore({
    reducer:{
        cars:carsReducer,
        user:userReducer,
        carForm:carFormReducer,
        userForm:userFormReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store}
export {changeEmail,changePassword,changeUserAsLogIn,changeUserAsLogOut,
    changeCarColorForm,changeCarContactNumberForm,changeCarImageForm,changeCarModelForm,changeCarNameForm,changeCarPriceForm,addCar,removeCar,reset}