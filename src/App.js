import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Products from './pages/Products';
import Product from './pages/Product';

import './App.css';

function App() {
  const [cart, setCart] = useState({
    "size": 0,
    "items": []
  })

  
  return (
    <div className="App">
      <Header cart={cart}/>

      <Routes>
        <Route path='/' element={<div />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/product/:id' element={<Product setCart={setCart}/>}/>
      </Routes>
    </div>
  );
}

export default App;
