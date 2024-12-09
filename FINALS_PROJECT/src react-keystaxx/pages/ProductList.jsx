import React from 'react';
import './styles/ProductList.css';

const products = [
  { id: 1, name: 'Keyboard A [Mechanical]', description: 'Mechanical keyboard with RGB backlighting. Best for aesthetic purposes.' },
  { id: 2, name: 'Keyboard B [Switches]', description: 'Ergonomic keyboard with soft-touch keys. Recommended for people who wants the most quiet keyboard' },
  { id: 3, name: 'Keyboard C [60%]', description: 'A compact size keyboard that features only the most important keys for everyday life.' },
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
            <a className='details' href={`/product/${product.id}`}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
