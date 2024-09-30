import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getCart } from '../utils/cartUtils'
import 'boxicons'

const Header = ({ cart, setCart }) => {
  const fetchCart = async () => {
    const currCart = await getCart();
    setCart(currCart);
  }

  useEffect(() => {
    fetchCart();
  }, [])

  const navigate = useNavigate();

  return (
    <header>
      <div className='head-top'>

        <div>e-Commerce</div>
        <div><Link to={`products`}>Browse Products</Link></div>
        {/* <div></div> */}
        <div className='account-button-container'>
          <button 
            className='sign-in-button'
            onClick={() => navigate('/login')}
          >
            Log In
          </button>
          <button className='sign-up-button'>Sign Up</button>
        </div>
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