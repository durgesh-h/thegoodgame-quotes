import React from 'react';
import PropTypes from 'prop-types';

const SavedQuotes = ({ quotes, onDelete }) => (
  <div className="w-full max-w-md mx-auto mt-6">
    <h2 className="text-xl font-semibold mb-4">Saved Quotes</h2>
    {quotes.map((quote, index) => (
      <div key={index} className="glassmorphism mb-2 flex justify-between items-center">
        <p>{quote}</p>
        <button
          onClick={() => onDelete(index)}
          className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

SavedQuotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SavedQuotes;
