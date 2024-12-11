import React from 'react';
import './styles/ProductList.css';

const products = [
  { id: 1, name: 'TacPro Mechanical', description: 'The keyboard that just has the right sensory feedback which provides satisfaction to most users.' }, //
  { id: 2, name: 'RGB Gaming Chimera', description: 'Illuminate your gaming setup with dynamic RGB lighting.'}, //Chimera - various colors that flows harmoniously
  { id: 3, name: 'EmKey Wireless Pro', description: 'A modern keyboard that focuses on functionality, portability, and a touch of minimalistic design.' }, //M(inimalistic)-Keyboard
  { id: 4, name: 'LiKey Ergo V3', description: 'Ergonomic keyboard with soft-touch keys. Recommended for people who wants the most quiet keyboard' },//Linear & Ergonomic Key Version3
  { id: 5, name: 'ComKey FRL', description: 'A compact size keyboard that features only the most important keys for everyday life.' },//Compact-Keyboard forRealLife
  
];

const ProductList = () => {
  return (
    <div className='main-container'>
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
      <footer>
        <hr/>
        <p>© 2024 Keyboard Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductList;
