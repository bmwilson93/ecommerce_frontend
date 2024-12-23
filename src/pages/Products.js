import React from 'react'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './Products.css';

const Products = () => {
  const navigate = useNavigate();

  const fetchProducts = async () => {
    // make a request to backend to get all products in database
    const result = await fetch(`${process.env.REACT_APP_API_PATH}/products`);
    const data = await result.json();

    setProducts(data);
  }

  const [products, setProducts] = useState([]);

  // Get all products on page load
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ul className='product-list'>
        {products.map(product => {
          return (
          <li key={product.id} onClick={() => navigate(`/product/${product.id}`, {state:{product: product}})}>
            <ProductCard product={product}/>
          </li>
            )
        })}
      </ul>

    </div>
  )
}

export default Products