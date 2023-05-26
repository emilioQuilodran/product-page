import React, {useState} from 'react'
import { QuantityInput } from '../styles/Quantity.styled'

export const Quantity = () => {
    const [value, setvalue] = useState(1)

    const increment = () => {
        setvalue(value + 1 )
    }

    const decrement = () => {
        setvalue(value - 1 )
    }

    return (
        <QuantityInput className='quantity-input'>
            <button 
                className="quantity-input__modifier quantity-input__modifier--left"
                onClick={decrement}
                disabled={value === 0}
            >
                -
            </button>
            <input className="quantity-input__screen" type="text" value={value} readOnly />
            <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
                &#xff0b;
            </button>
        </QuantityInput>
    )
}
