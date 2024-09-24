import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<div />}/>
      </Routes>
    </div>
  );
}

export default App;
