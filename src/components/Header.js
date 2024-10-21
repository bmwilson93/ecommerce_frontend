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

  useEffect(() => {
    fetchCart();
  }, [])

  const navigate = useNavigate();

  return (
    <header>
      <div className='head-top'>

        <div><Link className='link logo' to=''>e-Commerce</Link></div>

      </div> {/* END head-top */}


      <nav className='head-bottom'>

      <div><Link className='link' to={`products`}>Browse Products</Link></div>

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
            <span className='slash'></span>
            <button 
              className='sign-up-button'
              onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
          </div>
        }


        <div className='cart-button-container'>
          <button 
            className={window.innerWidth < 900 ? "small" : ""}
            onClick={() => navigate('/cart')}
          > 
          <box-icon color='white' name='cart'></box-icon>
            {cart.size}
          </button>

        </div>

      </nav> {/* END head-bottom */}

    </header>
  )
}

export default Header