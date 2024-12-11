import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

const randomReviews = [
  { user: 'Alice', text: 'Amazing product! Exceeded my expectations.', date: new Date().toLocaleString() },
  { user: 'Bob', text: 'Good value for money. Highly recommend.', date: new Date().toLocaleString() },
  { user: 'Charlie', text: 'Solid build quality and great design.', date: new Date().toLocaleString() },
  { user: 'Diana', text: 'Very comfortable to use for long hours.', date: new Date().toLocaleString() },
  { user: 'Eve', text: 'A must-have for any keyboard enthusiast.', date: new Date().toLocaleString() },
  { user: 'Frank', text: 'Perfect for gaming and typing.', date: new Date().toLocaleString() },
  { user: 'Grace', text: 'Stylish and functional. Love it!', date: new Date().toLocaleString() },
  { user: 'Hank', text: 'Best keyboard I have ever owned.', date: new Date().toLocaleString() },
];

const ProductManual = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    const shuffledReviews = [...randomReviews].sort(() => 0.5 - Math.random());
    setReviews(shuffledReviews.slice(0, 4));
  }, [productId]);

  const handleReviewSubmit = () => {
    if (newUser.trim() && newReview.trim()) {
      const reviewEntry = {
        user: newUser,
        text: newReview,
        date: new Date().toLocaleString(),
      };
      setReviews([...reviews, reviewEntry]);
      setNewUser("");
      setNewReview("");
    }
  };

  return (
    <div className='main-container'>
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>REVIEWS</h3>
      {reviews.map((review, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
          <p><strong>{review.user}</strong> ({review.date}):</p>
          <p>{review.text}</p>
        </div>
      ))}
      <textarea 
        value={newUser} 
        onChange={(e) => setNewUser(e.target.value)} 
        placeholder="Enter your Username: "
      ></textarea>
      <br/>
      <textarea 
        value={newReview} 
        onChange={(e) => setNewReview(e.target.value)} 
        placeholder="Write your review..."
      ></textarea><br/>
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
      <footer>
        <hr/>
        <p>© 2024 Keyboard Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductManual;
