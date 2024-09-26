import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className='product-card hover-grow'>
      <div className='product-card-img-container'>
        <img className='product-img' src={product.product_img} />
      </div>
      <div className='product-card-details'>
        <div>
          {product.name}
        </div>
        <div className='price'>
          {product.price}
        </div>
      </div>
    </div>
  )
}

export default ProductCard