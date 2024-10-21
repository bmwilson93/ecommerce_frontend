import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { isLoggedIn } from './utils/accountUtils';

// Components and Pages
import Header from './components/Header';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import Complete from './pages/Complete';
import Order from './pages/Order';
import Home from './pages/Home';

import './App.css';


function App() {
  const [cart, setCart] = useState({
    "size": 0,
    "items": []
  })

  const [sessionUser, setSessionUser] = useState(null);

  const fetchSessionUser = async () => {
    const session = await isLoggedIn();
    setSessionUser(session);
  }

  // check if user is logged in on load
  useEffect(() => {
    fetchSessionUser()
  }, [])
  
  return (
      <div className="App">
          <Header cart={cart} setCart={setCart} sessionUser={sessionUser}/>

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/product/:id' element={<Product setCart={setCart}/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
            <Route path='/login' element={<Login sessionUser={sessionUser} setSessionUser={setSessionUser}/>} />
            <Route path='/signup' element={<Signup sessionUser={sessionUser} setSessionUser={setSessionUser}/>} />
            <Route path='/account' element={<Account sessionUser={sessionUser} setSessionUser={setSessionUser}/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/complete/:id' element={<Complete setCart={setCart}/>} />
            <Route path='/order/:id' element={<Order />} />
          </Routes>
      </div>
  );
}

export default App;
