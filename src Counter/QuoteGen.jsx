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
    const [index, setIndex] = useState(0);

    function getRandomNumber() {
        return Math.floor(Math.random() * randomQuotes.length);
    }

    function randomQuoteChange() {
        setIndex(getRandomNumber());
    }

    function nextQuote() {
        setIndex((prevIndex) => (prevIndex + 1) % randomQuotes.length);
    }

    function prevQuote() {
        setIndex((prevIndex) => (prevIndex - 1) % randomQuotes.length);
    }

    return (
        <div className="quote-gen-container" >
            <br /> <br />
            <h1>Quote:</h1>
            
            <div className="quote-display">    
                <p className="quote">{randomQuotes[index]}</p>
            </div>
            <br />
            
            <button className="prev-quote" onClick={prevQuote}>
                Previous Quote
            </button>
            <button className="randomize" onClick={randomQuoteChange}>
                Random Quote
            </button>
            <button className="next-quote" onClick={nextQuote}>
                Next Quote
            </button>
            <br />
            
        </div>
    );
}
