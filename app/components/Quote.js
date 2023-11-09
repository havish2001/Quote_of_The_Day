// components/Quote.js
import React from 'react';

const Quote = ({ quote }) => {
  return (
    <div>
      {quote ? (
        <div>
          <blockquote>{quote.content}</blockquote>
          <p>- {quote.author}</p>
        </div>
      ) : (
        <p>No quote available.</p>
      )}
    </div>
  );
};

export default Quote;
