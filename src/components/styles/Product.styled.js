import styled from 'styled-components'

export const ProductsContainer = styled.section`
  color: ${({theme}) => theme.colors.textColor };

  .product-content {
    text-align: left;
    padding: 5%;
    .product-footer {
      .addCart {
        margin-top: 20px;
        .MuiButtonBase-root {
          width: 100%;
          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }
      }
    }
    .price-content {
      margin: 7% 0;
      .price {
        font-size: 28px;
        font-weight: bold;
      }
      .disscount {
        display: inline-block;
        font-weight: bold;
        padding: 4px 8px;
        margin-left: 5px;
        font-size: 16px;
        border-radius: 5px;
        vertical-align: top;
        background-color: ${({theme}) => theme.colors.paleOrange };
        color: ${({theme}) => theme.colors.orange };
      }
      .old-price {
        font-size: 16px;
        font-weight: bold;
        text-decoration: line-through;
        color: ${({theme}) => theme.colors.gayishBlue };
      }
    }
  }

  .image-gallery-thumbnails-wrapper {
    display: none;
  }

  @media only screen and (min-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8%;

    .product-content {
      padding 0 0 0 5%;
    }

    .gallery-content {
      max-width: 445px;
      cursor: pointer;
    }

    .image-gallery-left-nav, .image-gallery-right-nav {
      display: none;
    }

    .product-content {
      .product-footer {
        display:flex;
        .addCart {
          margin-top: 0;
          margin-left: 20px;
          .MuiButtonBase-root {
            width: auto;
          }
        }
      }
    }

    .image-gallery-swipe, .image-gallery-thumbnail-inner {
      border-radius: 10px;
      overflow: hidden;
    }

    .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover {
      border: 4px solid transparent;
      border-radius: 12px;
    }

    .image-gallery-thumbnail.active, .image-gallery-thumbnail:focus {
      border: 4px solid transparent;
      border-radius: 12px;
    }

    .image-gallery-thumbnail.active{
      .image-gallery-thumbnail-inner {
        border: 2px solid  ${({theme}) => theme.colors.orange };
        .image-gallery-thumbnail-image{
          opacity: .5;
        }
      }
    }

    .image-gallery-thumbnails-wrapper {
      display: block;
      margin: 10px 0;
    }
  }
`
export const Product = styled.div`
  border-solid: 1px solid var(--orange)
`
export const Title = styled.h2`
  color: ${({theme}) => theme.colors.textColor };
  margin-bottom: 20px;
  `

export const Category = styled.span`
  color: ${({theme}) => theme.colors.orange};
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;
  margin-bottom: 20px;
`