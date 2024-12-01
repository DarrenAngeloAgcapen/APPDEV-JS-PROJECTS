import React from 'react';
import './styles/ProductList.css';

const products = [
  { id: 1, name: 'Keyboard A', description: 'Mechanical keyboard with RGB backlighting.' },
  { id: 2, name: 'Keyboard B', description: 'Ergonomic keyboard with soft-touch keys.' },
  // Add more products
];

const ProductList = () => {
  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <a href={`/product/${product.id}`}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
