import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [randomQuote, setRandomQuote] = useState(null);
  const [savedQuotes, setSavedQuotes] = useState([]);

  const generateRandomQuote = async () => {
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      const data = await response.json();
      setRandomQuote(data); // Mengupdate dengan hasil dari API
    } catch (error) {
      console.error("Error fetching quote:", error);
      setRandomQuote({ quote: "Failed to fetch quote. Please try again!", author: "" });
    }
  };

  const saveQuote = () => {
    if (randomQuote) {
      setSavedQuotes([...savedQuotes, randomQuote]);
    }
  };

  const deleteSavedQuote = (quoteToDelete) => {
    setSavedQuotes(savedQuotes.filter((quote) => quote !== quoteToDelete));
  };

  return (
    <div className="app-container">
      <h1>Random Quotes Generator</h1>
      <div className="quote-box">
        {randomQuote ? (
          <>
            <p className="quote-text">"{randomQuote.quote}"</p>
            <p className="quote-author">~ {randomQuote.author}</p>
            <button className="save-button" onClick={saveQuote}>
              Save
            </button>
          </>
        ) : (
          <p>Click "Generate" to get a quote</p>
        )}
        <button className="generate-button" onClick={generateRandomQuote}>
          Generate
        </button>
      </div>

      <div className="saved-quotes-section">
        <h2>Saved Quotes</h2>
        {savedQuotes.length > 0 ? (
          savedQuotes.map((quote, index) => (
            <div key={index} className="saved-quote-card">
              <p>"{quote.quote}"</p>
              <p>~ {quote.author}</p>
              <button onClick={() => deleteSavedQuote(quote)} className="delete-button">
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No quotes saved</p>
        )}
      </div>
    </div>
  );
};

export default App;
