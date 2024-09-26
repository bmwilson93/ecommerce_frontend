import React from 'react'
import { Link } from 'react-router-dom'
import 'boxicons'

const Header = ({ cart }) => {
  return (
    <header>
      <div className='head-top'>

        <div>e-Commerce</div>
        <div><Link to={`products`}>Browse Products</Link></div>
        {/* <div></div> */}
        <div className='account-button-container'>
          <button className='sign-in-button'>Log In</button>
          <button className='sign-up-button'>Sign Up</button>
        </div>
      </div>

      <div className='cart-button-container'>
        <button> 
        <box-icon color='white' name='cart'></box-icon>
           {cart.size}
        </button>
        
      </div>
    </header>
  )
}

export default Header