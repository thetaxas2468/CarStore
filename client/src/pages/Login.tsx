import React, { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeEmail, changePassword, changeUserAsLogIn, reset } from '../store';
import "./static/Login.css"
import axios from 'axios';
import { SIGN_IN_URL } from "../utils";
// import Cookies from "js-cookie";
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";


const Login = () => {
    const { email, password } = useAppSelector(state => state.userForm);
    const dispatch = useAppDispatch();
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const user = Cookies.get("email")?.split("@")[0] || null;

    useEffect(()=>{
        if( user !== null && user !== undefined){
            navigate("/");
        }
    })

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        //Utils
        axios.post(SIGN_IN_URL!, { email, password }, { withCredentials: true }).then(result => {
            const { jwt, email: emailName } = Cookies.get();
            localStorage.setItem("jwt", jwt);
            localStorage.setItem("email", emailName);
            dispatch(changeUserAsLogIn(emailName.split("@")[0]));
            dispatch(reset());
            window.location.reload();
            navigate("/");

        }).catch(err => {
            setError(err.response.data.error);
        })

    };

    return (
        <div className='container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => dispatch(changeEmail(e.target.value))}
                        required
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => dispatch(changePassword(e.target.value))}
                        required
                        placeholder='Password'
                    />
                </div>
                <button type="submit">Login</button>
                <h5 style={{ "color": "red" }}>{error}</h5>
            </form>
        </div>
    );
};

export default Login;
