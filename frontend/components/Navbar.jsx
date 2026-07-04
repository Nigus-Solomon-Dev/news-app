'use client';

import { useState } from "react";

export default function Navbar({ onCategorySelect, onSearch }) {
  const [searchInput, setSearchInput] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  const handleCategoryClick = (category) => {
    console.log('🟢 Category clicked in Navbar:', category);
    setActiveCategory(category);
    onCategorySelect(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
      setSearchInput('');
    }
  };

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">📰 News App</h1>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              setActiveCategory('');
              onCategorySelect('');
            }}
            className={`px-3 py-1 rounded-full transition text-sm ${
              activeCategory === '' ? 'bg-blue-600' : 'bg-slate-700 hover:bg-blue-600'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-3 py-1 rounded-full transition text-sm capitalize ${
                activeCategory === cat ? 'bg-blue-600' : 'bg-slate-700 hover:bg-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            placeholder="Search news..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-3 py-1 rounded bg-slate-800 text-white border border-slate-600 focus:outline-none focus:border-blue-400 text-sm"
          />
          <button
            type="submit"
            className="px-4 py-1 bg-blue-600 rounded hover:bg-blue-700 transition text-sm"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}