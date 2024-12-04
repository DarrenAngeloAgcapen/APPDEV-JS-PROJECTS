import { useParams } from 'react-router-dom';
import { useState } from 'react';

const products = [
  { id: 1, name: "Aurora", description: "RGB Mechanical Keyboard" },
  { id: 2, name: "Chroma", description: "Premium Mechanical Keyboard" },
  // Add more products
];

const ProductManual = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [newUser, setNewUser] = useState("");
  const [user, setUser] =useState("");

  const handleReviewSubmit = () => {
    if (newUser.trim()){
      setUser ([...user, newUser]);
        setNewUser("");
        if (newReview.trim()) {
        setReviews([...reviews, newReview]);
        setNewReview("");
      } 
    }
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>REVIEWS</h3>
      {reviews.map((review, idx) => (
        <p key={idx}>- {review}</p>
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
      ></textarea>
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
};

export default ProductManual;
