import React from 'react'
import Car from "./Car"
import { Cars } from './Gar'

export default function CarList() {


    return (
        <div>
            <h1>CARS</h1>
            <ul>
                {Cars.map((car) => (
                    <li>
                        <Car key={car.id} {...car} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
