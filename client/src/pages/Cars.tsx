import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { setCars } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import CarsList from "../components/CarsList";
import { GETCARS_URL } from '../utils';

const Cars = () => {
  const { cars } = useAppSelector(state => state.cars);
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>("");


  useEffect(() => {
    axios.get(GETCARS_URL!, { withCredentials: true }).then(result => {
      dispatch(setCars(result.data.result))
    }).catch(error => {
      setError(error.message)
    })
  }, []);

  return (
    <div>
      {error}
      <div><CarsList cars={cars}></CarsList></div>
    </div>
  )
}

export default Cars