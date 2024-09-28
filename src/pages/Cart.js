import React from 'react'
import { clearCart, removeCartItem } from '../utils/cartUtils'
import './Cart.css'

const Cart = ({ cart, setCart }) => {

  const getCartTotal = () => {
    if (cart.items) {
      let sum = 0;
      for (let i = 0; i < cart.items.length; i++) {
        sum += (cart.items[i].product.price * cart.items[i].qty);
      }
      return sum.toFixed(2);
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



                {/* Container Div */}
                <div className='cart-item-container'>


                  {/* Image Div */}
                  <div className='cart-item-image'>
                    <img src={item.product.product_img} />
                  </div>
                  {/* End Image Div */}


                  {/* Details Div */}
                  <div className='cart-item-details'>

                    <div>
                      <h2>{item.product.name}</h2>
                    </div>

                    <div>
                      <div className='cart-item-price-container'>
                        <p><span className='price-sign'>$</span><span className='price cart-price'>{(item.product.price * item.qty).toFixed(2)}</span></p>
                        <p>(<span className='price-sign'>$</span><span className='price cart-price-per-item'>{item.product.price.toFixed(2)} x {item.qty} </span>)</p>
                      </div>
                    </div>

                    <div className='qty-container'>
                      <button className='qty-section btn-blue'>-</button>
                      <div className='qty-section'>{item.qty}</div>
                      <button className='qty-section btn-blue'>+</button>
                    </div>
                    
                    <div>
                      {/* Remove Item Button */}
                      <button 
                        className='remove-item-btn btn-blue'
                        onClick={async () => {
                          const updatedCart = await removeCartItem(item.product.id);
                          setCart(updatedCart);
                        }}
                      >
                        Remove Item
                      </button>
                    </div>

                  </div>
                  {/* End Details DIv */}


                </div>
                {/* End container Div */}



              </li>)
          }) : <></>}
        </ul>

        {/* Clear Cart Button */}
        <button onClick={
          async () => {
            var updatedCart = await clearCart();
            setCart(updatedCart)
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