import React from 'react'
import CarCard from './CarCard'
import { Car } from '../utils'

interface CarListProps {
  cars: Car[];
}

const CarsList = ({cars}:CarListProps) => {
  return (
    <div>{
      cars.map((car,key)=>{
          return <CarCard car={car} key={key}/>
      })
      }</div>
  )
}

export default CarsList