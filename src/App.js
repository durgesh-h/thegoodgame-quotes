import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import SavedQuotes from './SavedQuotes';
import './index.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const saveQuote = (quote) => {
    setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
  };

  const deleteQuote = (index) => {
    setSavedQuotes((prevQuotes) => prevQuotes.filter((_, i) => i !== index));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen flex flex-col animate-fadeUp">
      <nav className="bg-peach p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Ron Swanson Quotes</h1>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <button
          onClick={fetchQuote}
          className="bg-peach text-white py-2 px-4 rounded-md mb-6 hover:bg-opacity-75 transition"
        >
          Get New Quote
        </button>
        {quote && <QuoteCard quote={quote} onSave={saveQuote} />}
        <SavedQuotes quotes={savedQuotes} onDelete={deleteQuote} />
      </main>
      <footer className="bg-peach p-4 text-center">
        <p className='text-white'>Made with ❤️</p>
      </footer>
    </div>
  );
};

export default App;
