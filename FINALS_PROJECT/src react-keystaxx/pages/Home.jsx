import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
    return (
        <div className="main-container">
            <header className="main-header">
                <h1 className="main-title">Welcome to Keyboard Haven!</h1>
                <p className="main-subtitle">Your one-stop shop for keyboards. <br/> We have keyboards ranging from Casual, Gaming, and Professional Use!</p>
                
            </header>
            <section className="about-section">
                <h2 className="section-title">Why Choose Keyboard Haven?</h2>
                <p className="about-text">At Keyboard Haven, we provide a curated collection of high-quality keyboards designed for work, gaming, and everything in between. Shop with confidence and elevate your typing experience!</p>
                <button><Link to="/showcase">Check Out Our Best Sellers!</Link></button>
            </section>
            <footer>
                <hr/>
                <p>© 2024 Keyboard Haven. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
