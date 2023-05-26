import styled from 'styled-components'

export const QuantityInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 3px;
    width: 100%;
    justify-content: space-between;
    
    &:focus {
        background: red;
    }

    .quantity-input__modifier,
    .quantity-input__screen {
        user-select: none;
        outline: none;
    }

    .quantity-input__modifier {
        padding: .7rem;
        width: 3rem;
        font-size: 1.5rem;
        
        background: #f3f3f3;
        color: ${({theme}) => theme.colors.orange };
        border: 0 solid #dbdbdb;
        text-align: center;
        text-shadow: 0 1px 0 rgba(#fff, .6);
        
        cursor: pointer;
        
        &:hover {
            background: darken(#f3f3f3, 10%);
            color: darken(${({theme}) => theme.colors.orange }, 20%)
        }
        
        &--left {
            border-radius: 3px 0 0 3px;
        }
        
        &--right {
            border-radius: 0 3px 3px 0;
        }
    }

    .quantity-input__screen {
        width: 4rem;
        padding: .7rem;
        font-size: 1.5rem;
        
        border: 0;
        border-top: 0 solid #dbdbdb;
        border-bottom: 0 solid #dbdbdb;
        text-align: center;
    }

    @media only screen and (min-width: 768px){
        width: fit-content;
    }
`