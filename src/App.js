import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Products from './pages/Products';
import Product from './pages/Product';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<div />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/product/:id' element={<Product />}/>
      </Routes>
    </div>
  );
}

export default App;
