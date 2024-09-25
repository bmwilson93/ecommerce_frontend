import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Products from './pages/Products';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<div />}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
    </div>
  );
}

export default App;
