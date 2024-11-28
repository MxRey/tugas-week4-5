import React from 'react';

const SavedQuotes = ({ savedQuotes, deleteQuote }) => {
  return (
    <div className="saved-quotes">
      <h2>Saved Quotes</h2>
      {savedQuotes.map((item, index) => (
        <div key={index} className="saved-quote">
          <p>"{item.text}"</p>
          <p>~ {item.author}</p>
          <button onClick={() => deleteQuote(index)}>🗑 Delete</button>
        </div>
      ))}
    </div>
  );
};

export default SavedQuotes;