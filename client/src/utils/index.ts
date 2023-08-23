export type initUserFormState = {
    email:string,
    password:string
}

export type User = {
    name: string | null
}


export interface Car {
    _id?:string,
    name:string,
    model:number,
    price:number,
    color:string,
    contactNumber:string,
    image:string,
}


export const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const SIGN_IN_URL = process.env.REACT_APP_SIGN_IN;
export const SIGN_UP_URL = process.env.REACT_APP_SIGN_UP;
export const LOGOUT_URL = process.env.REACT_APP_LOGOUT;
export const GETCARS_URL = process.env.REACT_APP_GET_CARS;

