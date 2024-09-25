import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      {product.name}
      {product.price}
    </div>
  )
}

export default ProductCard