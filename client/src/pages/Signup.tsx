import React, {  FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeEmail, changePassword, reset } from '../store';
import "./static/Login.css";
import { SIGN_UP_URL } from '../utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const {email,password} = useAppSelector(state=>state.userForm);
    const dispatch=useAppDispatch();
    const navigate = useNavigate();
    const [error,setError] = useState<String>("");

    useEffect(()=>{
        dispatch(reset());
    },[dispatch])
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    //utils
    try{
      const result: any = await axios.post(SIGN_UP_URL!,{email,password},{withCredentials:true});
      if(result.status === 200){
        dispatch(reset());
        navigate("/login");
      }
      else{
        setError("Please try again");
      }
    }
    catch(e : any){
      setError(e.response.data.error);
    }
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
