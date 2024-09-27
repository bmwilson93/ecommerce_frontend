import React from 'react'
import { clearCart, getCart } from '../utils/cartUtils'
import { useEffect } from 'react'
import './Cart.css'

const Cart = ({ cart, setCart }) => {
  const fetchCart = async () => {
    const currCart = await getCart();
    setCart(currCart);
  }

  useEffect(() => {
    fetchCart();
  }, [])

  const getCartTotal = () => {
    if (cart.items) {
      let sum = 0;
      for (let i = 0; i < cart.items.length; i++) {
        sum += (cart.items[i].product.price * cart.items[i].qty);
      }
      return sum;
    }
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

                  <div className='cart-item-image'>
                    <img src={item.product.product_img} />
                  </div>

                  <div className='cart-item-details'>
                    <h2>{item.product.name}</h2>
                    <p><span className='price-sign'>$</span><span className='price'>{item.product.price} x {item.qty} </span><div><div>+</div><div>-</div></div></p>
                    <p><span className='price-sign'>$</span><span className='price'>{item.product.price * item.qty}</span></p>
                    <button className='remove-item-btn btn-blue'>Remove Item</button>
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
          Total: <span className='price-sign'>$</span><span className='price price-total'>{getCartTotal()}</span>
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