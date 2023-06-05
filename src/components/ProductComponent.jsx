import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ProductsContainer, Title, Category } from './styles/Product.styled'
import { Gallery } from './pure/Gallery'
import { Quantity } from './pure/Quantity'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Modal } from './pure/Modal'

const ProductComponent = ({state, onAddItem, onIncrement, onDecrement}) => {
  const [modalState, setmodalState] = useState(false)
  let itemList =  state?.items?.map( (item, index) => {
    return(
      <div key={index} className='product-content'>
        <div className='product-body'>
          <Category>Sneaker Company</Category>
          <Title>{item.title}</Title>
          <p className='description'> These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. </p>
          <div className='price-content'>
            <span className='price'>$125.00</span>
            <span className='disscount'>50%</span>
            <p className='old-price'>$250.00</p>
          </div>
        </div>
        <div className="product-footer">
          <Quantity
            incremnt={() => onIncrement(item)}
            decrement={() => onDecrement(item)}
            ammount={state.items[0].count}
          />
          <div className='addCart'>
            <Button style={
              {
                backgroundColor: `hsl(26, 100%, 55%)`,
                height: '56px'
              }
            }
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              onClick={()=> handleClick(item)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    )
  } )
  const handleModalState = () => {
    setmodalState(!modalState)
  }

  const handleClick = (item) => {
    onAddItem(item)
  }

  return (
    <>
      <ProductsContainer>
        <div className='gallery-content'>
          <Gallery onClickModal={handleModalState}></Gallery>
        </div>
        {itemList}
      </ProductsContainer>
      {
        modalState && (
          <Modal
            state={modalState}
            handleClose={handleModalState}
          >
            <Gallery onClickModal={()=> {}}></Gallery>
          </Modal>
        )
      }
    </>
    
  )
}

ProductComponent.propTypes = {
  onAddItem: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default ProductComponent