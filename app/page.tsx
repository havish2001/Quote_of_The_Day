// pages/index.js
'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import './globals.css';
import Quote from './components/Quote';
import SearchBar from './components/SearchBar';

interface HomeProps {
  initialQuote: any; // Define the type of initialQuote
}

const Home: React.FC<HomeProps> = ({ initialQuote }) => {
  const [quote, setQuote] = useState(initialQuote);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Random Quote API Response:', data);
      setQuote(data);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  const searchQuotesByAuthor = async (author: string) => {
    try {
      let url = `https://api.quotable.io/quotes?author=${encodeURIComponent(author)}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Search API Response:', data);
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      setQuote(randomQuote);
    } catch (error) {
      console.error('Error searching quotes:', error);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Quote of the Day</title>
        <meta name="description" content="Quote of the Day App" />
      </Head>

      <main className="main">
        <h1 className="title">Quote of the Day</h1>
        <Quote quote={quote} />
        <SearchBar onSearch={searchQuotesByAuthor} />
        <button className="" onClick={fetchRandomQuote}>Get New Quote</button>
      </main>
    </div>
  );
};

export default Page;
