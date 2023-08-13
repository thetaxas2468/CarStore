import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../store/hooks';
import "./static/Navbar.css"
import { changeUserAsLogOut } from '../store/slices/userSlice';
import { LOGOUT_URL } from '../utils';
import axios from "axios";
import Cookies from "js-cookie"

const Navbar = () => {

    const dispatch = useAppDispatch();
    const user = Cookies.get("email")?.split("@")[0] || null;
    const logout = () => {
        axios.get(LOGOUT_URL!, { withCredentials: true }).then(res => {
            // do something
            dispatch(changeUserAsLogOut());

        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="position-sticky d-flex justify-content-between align-items-center flex-row navbarstyle">
            <Link to="/"><div>
                <img src='https://static.thenounproject.com/png/3574480-200.png' alt="home" className='home-icon'></img>
            </div></Link>
            {user === null || user === undefined ? <div>
                <Link to="/login" className='LinkTag'>Login</Link>
                <Link to="/signup" className='LinkTag'>Signup</Link>
            </div> : <div className='d-flex align-items-center justify-content-center'>
                <h5>Hello {user}</h5><img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt="icon" className='user-icon'></img>
                <button onClick={logout} className='LinkTag'>Logout</button>
            </div>}

        </div>
    )
}

export default Navbar