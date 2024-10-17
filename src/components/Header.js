import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getCart } from '../utils/cartUtils'
import 'boxicons'

import './Header.css'

const Header = ({ cart, setCart, sessionUser }) => {
  const fetchCart = async () => {
    const currCart = await getCart();
    if (currCart) {
      setCart(currCart);
    }
  }

  // add a function to check if user is logged in, and get display name. 
  // if logged in, render the display name instead of the login/signup buttons

  useEffect(() => {
    fetchCart();
  }, [])

  const navigate = useNavigate();

  return (
    <header>
      <div className='head-top'>

        <div>e-Commerce</div>
        <div><Link to={`products`}>Browse Products</Link></div>

        {/* If there is a user session, render their name, else render the login buttons */}
        {sessionUser ?
            
            <div className='account-btn-container'>
              <button 
                className='account-btn'
                onClick={() => navigate('/account')}
              >
                Hi {sessionUser.first_name}
              </button>
            </div>

          : <div className='account-btn-container'>
            <button 
              className='sign-in-button'
              onClick={() => navigate('/login')}
            >
              Log In
            </button>
            <button 
              className='sign-up-button'
              onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
          </div>
        }


      </div>

      <div className='cart-button-container'>
        <button onClick={() => navigate('/cart')}> 
        <box-icon color='white' name='cart'></box-icon>
           {cart.size}
        </button>

      </div>
    </header>
  )
}

export default Header