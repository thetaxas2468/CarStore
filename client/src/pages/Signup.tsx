import {  FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeEmail, changePassword, reset } from '../store';
import "./static/Login.css";
import { useNavigate } from 'react-router-dom';
import { sign_up_function } from '../utils/functions';


const Signup = () => {
    const {email,password} = useAppSelector(state=>state.userForm);
    const dispatch=useAppDispatch();
    const navigate = useNavigate();
    const [error,setError] = useState<string>("");

    useEffect(()=>{
        dispatch(reset());
    },[dispatch])
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    //utils
    sign_up_function(email,password).then(result=>{
      if (result === "done"){
        dispatch(reset());
        navigate("/login");
      }
      else{
        setError(result);
      }
    })
  };

  return (
    <div className='container'>
      <h2>Signup</h2>
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
        <button type="submit">Signup</button>
      </form>
      <div style={{"color":"red"}}>
        {error}
      </div>
    </div>
  );
};

export default Signup;
