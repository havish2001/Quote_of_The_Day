// components/SearchBar.js
import React, { useState } from 'react';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='searchContainer'>
      <input
        className='searchInput'
        type="text"
        placeholder="Search by Author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='searchButton' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

