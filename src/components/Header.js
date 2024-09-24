import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='head-top'>
        <div>e-Commerce</div>
        {/* <div></div> */}
        <div>Log In</div>
      </div>
      <div className='cart-button-container'>
        <button>Cart</button>
      </div>
    </header>
  )
}

export default Header