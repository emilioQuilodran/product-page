import React from 'react'
import { QuantityInput } from '../styles/Quantity.styled'

export const Quantity = ({incremnt, decrement, ammount}) => {

    return (
        <QuantityInput className='quantity-input'>
            <button 
                className="quantity-input__modifier quantity-input__modifier--left"
                onClick={decrement}
                disabled={ammount === 0}
            >
                -
            </button>
            <input className="quantity-input__screen" type="text" value={ammount} readOnly />
            <button className="quantity-input__modifier quantity-input__modifier--right" onClick={incremnt}>
                &#xff0b;
            </button>
        </QuantityInput>
    )
}
