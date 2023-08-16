import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../store/hooks';
import "./static/Home.css";
import Cookies from "js-cookie";

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const { userForm, cars, carForm } = useAppSelector(state => state);
    const dispatch = useAppDispatch();


    const user = Cookies.get("email")?.split("@")[0] || null;


    return (
        <div className={user=== null || user === undefined?"main-div":""}>
            {user=== null || user === undefined?
            <div className='d-flex justify-content-center align-items-center flex-column w-100 container-text'>

            <h1>Welcome to Car World!</h1>
            <h4> 
            Car buying that revolves around you
            </h4>
            </div>:<div></div>}
        </div>
    )
}

export default Home