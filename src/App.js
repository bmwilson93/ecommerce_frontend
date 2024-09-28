import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';

import './App.css';

function App() {
  const [cart, setCart] = useState({
    "size": 0,
    "items": []
  })

  
  return (
    <div className="App">
      <Header cart={cart} setCart={setCart}/>

      <Routes>
        <Route path='/' element={<div />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/product/:id' element={<Product setCart={setCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </div>
  );
}

export default App;
