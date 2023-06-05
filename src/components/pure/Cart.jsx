import React from 'react'
import { connect } from 'react-redux'
import { CartStyle } from '../styles/Cart.styled'
import imgProd1Thumb from '../../assets/images/image-product-1-thumbnail.jpg'
import { Button } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteCart } from '../../store/actions/actions'

const Cart = ({items, total, isOpen, removeItem}) => {

  const handleRemove = (product) => {
    removeItem(product)
  }

  let _items = items?.length ? (
        <>
          <ul className="cart-items">
            {
              items.map((item, index) => {
                return(
                  <li key={index} className="cart-item">
                    <img className="product-image" alt="" src={imgProd1Thumb} />
                    <div className="product-info">
                        <p className="product-name">{item.title}</p>
                        <div className="product-price">
                            <span>{item.price} x {item.count}</span> <strong>$ {total}</strong>
                        </div>
                    </div>
                    <div
                        className="product-remove"
                        onClick={(item) => handleRemove(item)}
                    >
                        <DeleteOutlineIcon />
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <Button style={
              {
                backgroundColor: `hsl(26, 100%, 55%)`,
                height: '56px',
                width: '98%',
                margin: '2%'
              }
            }
              variant="contained"
            >
              Checkout
          </Button>
        </>
    ) : (
      <p>Your cart is empty</p>
    )

  return (
    <CartStyle style={{display: isOpen ? "block": "none"}}>
        <div className='cart-header'>
            Cart
        </div>
        <div className='cart-content'>
          { _items }
        </div>
    </CartStyle>
  )
}

const mapStateToProps = (state) => {
  return {
    total: state.cartState.total,
    items: state.cartState.addedItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => {dispatch(deleteCart(item))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)