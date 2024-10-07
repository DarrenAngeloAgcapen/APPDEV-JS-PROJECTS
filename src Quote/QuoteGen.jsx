import React, { useState } from "react";

const randomQuotes = [
    "Tolerance and Apathy are the last virtues of a dying society. -Aristotle", 
    "Anyone who holds a true opinion without understanding is like a blind man on the right road. -Socrates",
    "It is our choice of good or evil that determines our character, not our opinion about good or evil. -Aristotle",
    "The only thing I know is that I know nothing. -Socrates",
    "He who is not satisfied with a little, is satisfied with nothing. -Epicurus",
    "The only source of knowledge is experience. -Albert Einstein",
    "Every man is guilty of all the good he didn't do. -Voltaire",
    "What worries you, masters you. -John Locke"
];

export default function QuoteGen() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function getNextQuote() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % randomQuotes.length);
    }
    
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * randomQuotes.length);
        setCurrentIndex(randomIndex);
    }

    function getPreviousQuote() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + randomQuotes.length) % randomQuotes.length);
    }

    

    return (
        <div className="quote-gen-container">
            <br /><br />
            <h1>Quote:</h1>
            <div className="quote-display">    
                <p className="quote">{randomQuotes[currentIndex]}</p>
            </div>
            <div className="button-row">
                <button className="previous" onClick={getPreviousQuote}>
                    Previous Quote
                </button>
                <button className="random" onClick={getRandomQuote}>
                    Random Quote
                </button>
                <button className="next" onClick={getNextQuote}>
                    Next Quote
                </button>
                
            </div>
        </div>
    );
}
