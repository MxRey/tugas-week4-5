import React from 'react';

const QuoteCard = ({ quote, author, generateQuote, saveQuote }) => {
  return (
    <div className="quote-card">
      <p>"{quote}"</p>
      <p>~ {author}</p>
      <div>
        <button onClick={saveQuote} disabled={!quote}>
          Save
        </button>
        <button onClick={generateQuote}>Re-generate</button>
      </div>
    </div>
  );
};

export default QuoteCard;