import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='head-top'>

        <div>e-Commerce</div>
        {/* <div></div> */}
        <div className='account-button-container'>
          <button className='sign-in-button'>Log In</button>
          <button className='sign-up-button'>Sign Up</button>
        </div>
      </div>

      <div className='cart-button-container'>
        <button> 
        <box-icon color='white' name='cart'></box-icon>
           4
        </button>
        
      </div>
    </header>
  )
}

export default Header