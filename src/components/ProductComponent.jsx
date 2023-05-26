import React, {useState} from 'react'
import { ProductsContainer, Title, Category } from './styles/Product.styled'
import { Gallery } from './pure/Gallery'
import { Quantity } from './pure/Quantity'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Modal } from './pure/Modal'

export const ProductComponent = () => {
  const [modalState, setmodalState] = useState(false)

  const handleModalState = () => {
    setmodalState(!modalState)
  }

  return (
    <>
      <ProductsContainer>
        <div className='gallery-content'>
          <Gallery onClickModal={handleModalState}></Gallery>
        </div>
        <div className='product-content'>
          <div className='product-body'>
            <Category>Sneaker Company</Category>
            <Title>Fall Limited Edition <br /> Sneakers</Title>
            <p className='description'> These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. </p>
            <div className='price-content'>
              <span className='price'>$125.00</span>
              <span className='disscount'>50%</span>
              <p className='old-price'>$250.00</p>
            </div>
          </div>
          <div className="product-footer">
            <Quantity />
            <div className='addCart'>
              <Button style={
                {
                  backgroundColor: `hsl(26, 100%, 55%)`,
                  height: '56px'
                }
              }
                variant="contained"
                startIcon={<ShoppingCartIcon />}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
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
