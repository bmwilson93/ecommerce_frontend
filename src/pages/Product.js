import React from 'react'
import { useLocation } from 'react-router-dom'
import { addToCart } from '../utils/cartUtils';

import './Products.css';

const Product = ({ setCart }) => {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div className='product-container'>
      <div><img src={product.product_img} /></div>
      <div className="product-details">
        <div>
          <h2>{product.name}</h2>
          <p className='product-price'>${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
        <div>
          <div className="add-cart-btn">
          <span>Add To Cart </span>
          <button onClick={
            // Uses the cartUtils function to add an item to the cart
            async () => {
              console.log(product);
              const updatedCart = await addToCart(JSON.stringify(product));
              setCart(updatedCart);
            }
          }>+</button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Product