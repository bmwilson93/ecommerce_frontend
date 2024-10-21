import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'

import './Home.css';

const Home = () => {

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

      <div>
        <h1>Welcome!</h1>
        <p>This is a portfolio project for Codecademy showcasing a full stack e-Commerce app</p>

      </div>
      
      {/* <div>
        <p>This application can:</p>
        <ul id='project-list'>
          <li>Browse Products</li>
          <li>Add Products to Cart</li>
          <li>Create or Log Into an Account</li>
          <li>Place an Order</li>
        </ul>

      </div> */}
      <h2>Check out the newest products</h2>
      <div className='new-product-list'>
        <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                <ProductCard product={product}/>
              </li>
                )
          })}
        </ul>
      </div>
      <p>Or view all</p>

    </div>
  )
}

export default Home