import React from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div className='product-container'>
      <div><img src={product.product_img} /></div>
      <div className="product-details">
        <div>
          <h2>{product.name}</h2>
          <p className='product-price'>{product.price}</p>
          <p>{product.description}</p>
        </div>
        <div>
          <div className="add-cart-btn">
          <span>Add To Cart </span><button>+</button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Product