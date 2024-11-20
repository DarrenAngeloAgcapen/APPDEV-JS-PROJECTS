import './GameReview.css';
import { useState } from 'react';

export default function GameReview({ username }) {
    const [reviews, setReviews] = useState([]);
    const [userName, setUserName] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            userName,
            review,
            date: new Date().toLocaleDateString(),
        };
        setReviews([...reviews, newReview]);
        setUserName('');
        setReview('');
    };

    return (
        <div className="game-review-container">
            <h2>Welcome, {username}! Add a Game Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Review:</label>
                    <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
                </div>
                <button type="submit">Add Review</button>
            </form>

            <div className="review-list">
                <h3>Reviews:</h3>
                {reviews.map((r, index) => (
                    <div key={index} className="review-item">
                        <h4>{r.userName}</h4>
                        <p>{r.review}</p>
                        <small>Date: {r.date}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}
