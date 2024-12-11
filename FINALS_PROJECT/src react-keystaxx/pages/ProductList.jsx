import React from 'react';
import './styles/ProductList.css';

const products = [
  { id: 1, name: 'TacPro Mechanical', description: 'The keyboard that just has the right sensory feedback which provides satisfaction to most users. It also features adjustable mechanical switches with per-key actuation, customizable RGB lighting, and an OLED smart display.' },
  { id: 2, name: 'RGB Gaming Chimera', description: 'Illuminate your gaming setup with dynamic RGB lighting. Features adjustable mechanical switches with per-key actuation, customizable RGB lighting, and an OLED smart display.'},
  { id: 3, name: 'EmKey Wireless Pro', description: 'A modern keyboard that focuses on functionality, portability, and a touch of minimalistic design. Ergonomic keyboard with soft-touch keys. Recommended for people who wants the most quiet keyboard' },
  { id: 4, name: 'LiKey Ergo V3', description: 'Ergonomic keyboard with soft-touch keys. Recommended for people who wants the most quiet keyboard Features adjustable mechanical switches with per-key actuation, customizable RGB lighting, and an OLED smart display.' },
  { id: 5, name: 'ComKey FRL', description: 'A compact size keyboard that features only the most important keys for everyday life. Features adjustable mechanical switches with per-key actuation, customizable RGB lighting, and an OLED smart display.' },
  { id: 6, name: "Corsair K95 RGB Platinum", description: "A premium mechanical gaming keyboard with Cherry MX switches, customizable RGB lighting, and six dedicated macro keys. A modern keyboard that focuses on functionality, portability, and a touch of minimalistic design."},
  { id: 7, name: "Razer Huntsman V2", description: "An ultra-responsive optical keyboard with Razer's latest switches, sound-dampening foam, and customizable RGB lighting. It also features adjustable mechanical switches with per-key actuation, customizable RGB lighting, and an OLED smart display."},
  { id: 8, name: "Logitech G Pro X", description: "A tenkeyless gaming keyboard with swappable mechanical switches, customizable lighting, and compact design for portability. The keyboard that just has the right sensory feedback which provides satisfaction to most users."},
  { id: 9, name: "SteelSeries Apex Pro", description: "Features adjustable mechanical switches with per-key actuation, customizable RGB lighting, and an OLED smart display. It also features adjustable mechanical switches with per-key actuation, customizable RGB lighting, and an OLED smart display."},
  { id: 10, name: "HyperX Alloy Elite 2", description: "A solid gaming keyboard with HyperX switches, dynamic RGB lighting, and durable pudding keycaps for enhanced illumination. A compact size keyboard that features only the most important keys for everyday life."}
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
