import React from 'react'
import { clearCart } from '../utils/cartUtils'
import { useEffect } from 'react'
import './Cart.css'

const Cart = ({ cart, setCart }) => {
  const getCartTotal = () => {
    let sum = 0;
    for (let i = 0; i < cart.items.length; i++) {
      sum += (cart.items[i].product.price * cart.items[i].qty);
    }
    return sum;
  }

  return (
    <div className='cart-container'>

      <div className='cart-item-list-container'>

        {/* List of Cart items */}
        <ul>
          {cart.items ? cart.items.map(item => {
            return (
              <li key={item.product.id}>
                <div className='cart-item-container'>
                  <div>
                    <img src={item.product.product_img} />
                  </div>

                  <div>
                    <h2>{item.product.name}</h2>
                    <p>${item.product.price} x {item.qty}</p>
                    <p>${item.product.price * item.qty}</p>
                  </div>

                </div>
              </li>)
          }) : <></>}
        </ul>

        {/* Clear Cart Button */}
        <button onClick={
          () => {
            setCart(clearCart())
          }
        }>
          Empty Your Cart
        </button>

      </div>


      <div className='cart-details-container'>
        <div>
          Total: ${getCartTotal()}
        </div>
        <div>
          <button>Check Out</button>
        </div>
      </div>




    </div>
  )
}

// cart.item[0].id or .qty

export default Cart