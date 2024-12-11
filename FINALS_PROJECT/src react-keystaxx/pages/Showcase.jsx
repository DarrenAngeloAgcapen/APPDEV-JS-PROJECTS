import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Showcase.css';

const flagship = [
  { id: 1, name: 'TacPro Mechanical', description: 'The keyboard that just has the right sensory feedback which provides satisfaction to most users.' }, //
  { id: 2, name: 'RGB Gaming Chimera', description: 'Illuminate your gaming setup with dynamic RGB lighting.'}, //Chimera - various colors that flows harmoniously
  { id: 3, name: 'EmKey Wireless Pro', description: 'A modern keyboard that focuses on functionality, portability, and a touch of minimalistic design.' }, //M(inimalistic)-Keyboard
  { id: 4, name: "Razer Huntsman V2", description: "An ultra-responsive optical keyboard with Razer's latest switches, sound-dampening foam, and customizable RGB lighting."},
  { id: 5, name: "Logitech G Pro X", description: "A tenkeyless gaming keyboard with swappable mechanical switches, customizable lighting, and compact design for portability."},
  { id: 6, name: "SteelSeries Apex Pro", description: "Features adjustable mechanical switches with per-key actuation, customizable RGB lighting, and an OLED smart display."},
];
  
const Showcase = () => {
  return (
    <div className='main-container'>
    <div className="container">
      <h1>Our Best Selling Products</h1>
      <div className="product-list">
        {flagship.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
      <button ><Link to="/products">Shop Keyboards</Link></button>
    </div>
      <footer>
        <hr/>
        <p>© 2024 Keyboard Haven. All rights reserved.</p>
      </footer>
      </div>
  );
};
  
export default Showcase;