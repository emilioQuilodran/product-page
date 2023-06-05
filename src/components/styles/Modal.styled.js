import styled from 'styled-components'

export const ModalStyled = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1110;
    background-color:  rgba(29, 32, 37, 0.9);
    overflow: auto;
    padding-top: 5%;

    .image-gallery-thumbnails-wrapper {
        display: none;
    }

    .image-gallery-left-nav, .image-gallery-right-nav {
      display: none;
    }

    .css-7shn1t-MuiSvgIcon-root {
        top: 6%;
        z-index: 9999;
    }
    .image-gallery-slide .image-gallery-image {
      width:90%;
    }
    .image-gallery-content {
        max-width: 445px;
        margin: 40px auto;
    }

    @media only screen and (min-width: 768px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 0;

        .image-gallery-slide .image-gallery-image {
          width:100%;
        }
        
        .image-gallery-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: ${({theme}) => theme.colors.white};
          .image-gallery-svg {
            width: 18px;
            height: auto;
            font-weight: bold;
            color:  ${({theme}) => theme.colors.orange};
          }
        }

        .image-gallery-left-nav {
          left: -28px;
        }

        .image-gallery-right-nav {
          right: -28px;
        }

        .image-gallery-left-nav, .image-gallery-right-nav  {
          padding: 0;
          display: block;
        }
        .image-gallery-swipe, .image-gallery-thumbnail-inner {
          border-radius: 10px;
          overflow: hidden;
        }

        .image-gallery-thumbnail .image-gallery-thumbnail-inner {
            cursor: pointer;
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