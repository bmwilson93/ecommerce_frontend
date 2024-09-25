import React from 'react'
import { useState, useEffect } from 'react'

const Products = () => {
  const fetchProducts = async () => {
    // make a request to backend to get all products in database
    const result = await fetch('http://localhost:4001/api/products');
    const data = await result.json();
    console.log(data);

    setProducts(data);
  }

  const [products, setProducts] = useState([]);

  // Get all products on page load
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ul>
        {products.map(product => {
          return (<li key={product.id}>{product.name}</li>)
        })}
      </ul>

    </div>
  )
}

export default Products