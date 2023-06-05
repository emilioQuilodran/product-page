import styled from 'styled-components'

export const CartStyle = styled.section`
    position: absolute;
    width: 90%;
    max-width: 350px;
    min-width: 280px;
    top: 55px;
    right: 5%;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.white };
    box-shadow: 0 5px 20px rgba(0,0,0,0.16), 0 5px 20px rgba(0,0,0,0.23);
    display: none;

    @media only screen and (min-width: 768px){
        width: 350px;
        right: 25px;
    }

    .cart-header, .cart-content {
        padding:10px;
    }

    .cart-header {
        font-weight: bold;
        border-bottom: solid 1px ${({theme}) => theme.colors.gayishBlue };
        text-align: left;
    }
    .cart-item {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        padding: 8px;
        text-align: left;
        .product-image {
          width: 48px;
          height: 48px;
        }
        .product-info {
          margin-left: 16px;
          flex-grow: 1;
          .product-name {
            color: $gray-light;
            font-size: 14px;
          }
          .product-price {
            color: $gray-light;
            &:before {
              content: "$ ";
            }
          }
        }
        .product-remove {
          height: 24px;
          line-height: 24px;
          width: 24px;
          font-size: 22px;
          color: $gray-eighty;
          background-color: $white;
          text-align: center;
          padding: 0;
          &:hover {
            cursor:pointer;
          }
        }
        &:hover {
          background: ${({theme}) => theme.colors.lightGrayishBlue };
        }
    }
`