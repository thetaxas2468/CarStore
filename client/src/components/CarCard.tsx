import React from 'react'
import { Car } from '../utils'


interface CarCardProps {
  car: Car;
}

const CarCard = ({car}:CarCardProps) => {
  return (
    <div>
      <ul>
        <li>{car.image}</li>
        <li>{car.color}</li>
        <li>{car.contactNumber}</li>
        <li>{car.model}</li>
        <li>{car.name}</li>
        <li>{car.price}</li>
      </ul>
    </div>
  )
}

export default CarCard