import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { addToCart } from '../utils/cartUtils';

import './Product.css';

const Product = ({ setCart }) => {
  const location = useLocation();
  const product = location.state.product;

  const [added,setAdded] = useState(false)

  return (
    <div className='product-container'>
      <div><img src={product.product_img} /></div>
      <div className="product-details">
        <div>
          <h2>{product.name}</h2>
          {/* Fix Here */}
          <p className='product-price'>{(product.price / 100).toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
        <div>
          <div className="add-cart-btn">
          {added ?
          (<span>Added </span>)
          :
          (<span>Add To Cart  </span>)
          }
          <button onClick={
            // Uses the cartUtils function to add an item to the cart
            async () => {
              const updatedCart = await addToCart(JSON.stringify(product));
              setCart(updatedCart);
              setAdded(true);
            }
          }
          >
            +
          </button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Product