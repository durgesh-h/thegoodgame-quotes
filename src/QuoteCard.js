import React from 'react';
import PropTypes from 'prop-types';

const QuoteCard = ({ quote, onSave }) => (
  <div className="glassmorphism w-full max-w-md mx-auto mb-6">
    <p className="text-lg mb-4 typewriter">{quote}</p>
    <button
      onClick={() => onSave(quote)}
      className="bg-peach text-white py-2 px-4 rounded-md hover:bg-opacity-75 transition"
    >
      Save to List
    </button>
  </div>
);

QuoteCard.propTypes = {
  quote: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default QuoteCard;
