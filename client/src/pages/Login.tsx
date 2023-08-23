import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeEmail, changePassword, changeUserAsLogIn, reset } from '../store';
import "./static/Login.css"
// import Cookies from "js-cookie";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { sign_in_function } from '../utils/functions';


const Login = () => {
    const { email, password } = useAppSelector(state => state.userForm);
    const dispatch = useAppDispatch();
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const user = Cookies.get("email")?.split("@")[0] || null;

    useEffect(() => {
        if (user !== null && user !== undefined) {
            navigate("/");
        }
    })

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        //Utils
        sign_in_function(email, password).then(result => {
            if(result === "done"){
                dispatch(changeUserAsLogIn(localStorage.getItem("email")?.split("@")[0]));
                dispatch(reset());
                navigate("/");
                window.location.reload();
            }
            else{
                setError(result);
            }
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
