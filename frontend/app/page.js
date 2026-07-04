'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NewsCard from '@/components/NewsCard';
import { getNews, searchNews } from '@/utils/api';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async (category = '') => {
    setLoading(true);
    setError('');
    try {
      const data = await getNews(category);
      setArticles(data);
    } catch (err) {
      setError('Failed to load news');
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = (category) => {
    fetchNews(category);
  };

  const handleSearch = async (keyword) => {
    setLoading(true);
    setError('');
    try {
      const data = await searchNews(keyword);
      setArticles(data);
    } catch (err) {
      setError('Failed to search news');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar - stays at top */}
      <Navbar 
        onCategorySelect={handleCategorySelect} 
        onSearch={handleSearch} 
      />

      {/* Main content - takes remaining space */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading news...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No news found. Try a different category or search term.</p>
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}
      </main>

      {/* Footer - always at bottom */}
      <Footer />
    </div>
  );
}