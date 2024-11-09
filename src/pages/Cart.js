import { useNavigate } from 'react-router-dom'
import { clearCart, removeCartItem, increaseCartItem, decreaseCartItem } from '../utils/cartUtils'
import './Cart.css'

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const getCartTotal = () => {
    if (cart.items) {
      let sum = 0;
      for (let i = 0; i < cart.items.length; i++) {
        sum += (cart.items[i].product.price * cart.items[i].qty);
      }
      return sum.toFixed(2);
    }
  }

  const handleClick = () => {
    // check if cart is empty
    if (cart.size > 0) {
      navigate('/checkout', {state:{cartTotal: getCartTotal()}})
    } else {
      alert("Your cart is empty!")
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
                        <p><span className='price-sign'></span><span className='price cart-price'>${(item.product.price * item.qty)}</span></p>
                        <p>(<span className='price-sign'>$</span><span className='price cart-price-per-item'>{item.product.price} x {item.qty} </span>)</p>
                      </div>
                    </div>

                    <div className='qty-container'>
                      <button 
                      className='qty-section btn-blue'
                      onClick={async () => {
                        const updatedCart = await decreaseCartItem(item.product.id);
                        setCart(updatedCart);
                      }}
                      >
                        -
                      </button>

                      <div className='qty-section'>{item.qty}</div>

                      <button 
                      className='qty-section btn-blue'
                      onClick={async () => {
                        const updatedCart = await increaseCartItem(item.product.id);
                        setCart(updatedCart);
                      }}
                      >
                        +
                      </button>
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
        {
          cart.size 
          ?
          <button 
          className='btn-blue btn-empty-cart'
          onClick={
            async () => {
              var updatedCart = await clearCart();
              setCart(updatedCart)
            }
          }
        >
          Empty Your Cart
        </button>
          :
          <></>
        }


      </div>


      <div className='cart-details-container'>
        <div className='cart-total'>
          <p>
            Total: <span className='price-sign'>$</span><span className='price price-total'>{getCartTotal()}</span>
            
          </p>
        </div>
        <div>
          {/* Checkout Button */}
          {
            cart.size 
            ?
            <button 
              className='btn-blue btn-checkout'
              onClick={handleClick}
            >
              Check Out
            </button>
            :
            <p className='msg-empty'>Cart is Empty</p>
          }

        </div>
      </div>



    </div>
  )
}

export default Cart