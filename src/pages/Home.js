import React from 'react'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const fetchNewProducts = async () => {

    // make a request to backend to get all products in database
    const result = await fetch(`${process.env.REACT_APP_API_PATH}/products/new`);
    const data = await result.json();

    setProducts(data);
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchNewProducts();
  }, []);

  return (
    <div className='home-container'>

      <div className='welcome'>
        <h1>Welcome!</h1>
        <p>This is a portfolio project for Codecademy showcasing a full stack e-Commerce app</p>

      </div>
      
      <h2>Check out the newest products</h2>
      <div className='new-product-list'>
        <ul>
          {products.map(product => {
            return (
              <li key={product.id} onClick={() => navigate(`/product/${product.id}`, {state:{product: product}})}>
                <ProductCard product={product} />
              </li>
                )
          })}
        </ul>
      </div>
      <p>
        <Link to='/products' className='view-all'>Or view all</Link>
      </p>

    </div>
  )
}

export default Home