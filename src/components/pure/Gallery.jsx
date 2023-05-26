import React from 'react'
import ImageGallery from 'react-image-gallery'
import imageProduct1 from '../../assets/images/image-product-1.jpg'
import imgProd1Thumb from '../../assets/images/image-product-1-thumbnail.jpg'
import imageProduct2 from '../../assets/images/image-product-2.jpg'
import imgProd2Thumb from '../../assets/images/image-product-2-thumbnail.jpg'
import imageProduct3 from '../../assets/images/image-product-3.jpg'
import imgProd3Thumb from '../../assets/images/image-product-3-thumbnail.jpg'
import imageProduct4 from '../../assets/images/image-product-4.jpg'
import imgProd4Thumb from '../../assets/images/image-product-4-thumbnail.jpg'

const images = [
  {
    original: `${imageProduct1}`,
    thumbnail: `${imgProd1Thumb}`
  },
  {
    original: `${imageProduct2}`,
    thumbnail: `${imgProd2Thumb}`
  },
  {
    original: `${imageProduct3}`,
    thumbnail: `${imgProd3Thumb}`
  },
  {
    original: `${imageProduct4}`,
    thumbnail: `${imgProd4Thumb}`
  }
]

export const Gallery = ({onClickModal}) => {

  return (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false} 
      onClick={()=> onClickModal()}
    />
  )
}
