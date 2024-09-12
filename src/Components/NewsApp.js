 
import React, { useState, useEffect } from 'react';
import Card from './Card';

const NewsApp = () => {
  const [searchTerm, setSearchTerm] = useState('India');
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = '0e5496758438100eb4f4a77f54d19fa7';
  const [country, setCountry] = useState('');

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://gnews.io/api/v4/search?q=${searchTerm}&country=${country}&apikey=${API_KEY}`);
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [searchTerm, country, API_KEY]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const filteredNews = news?.filter((newsItem) => {
    return newsItem.title.toLowerCase().includes(searchTerm.toLowerCase());
  }) ?? [];

  const categories = [
    { label: 'Sports', value: 'sports' },
    { label: 'Politics', value: 'politics' },
    { label: 'Health', value: 'health' },
    { label: 'Economic', value: 'economic' },
    { label: 'Technology', value: 'technology' },
  ];

  const handleCategoryChange = (category) => {
    setSearchTerm(category);
  };

  return (
    <div className="container mx-auto p-4">
      <nav>
        <header className="flex justify-between items-center mb-4 bg-slate-600 overflow-hiddenmax-w-full">
          <h1 className="text-3xl font-bold text-white">AcoNews</h1>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="flex items-center  py-2 px-4 rounded-md w-full bg-transparent">
              <input
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search news titles or categories..."
                className="w-full pl-4 text-gray-700 focus:outline-none  bg-transparent font-semibold text-white border"
              />
              <button
                type="button"
                onClick={fetchNews}
                className="ml-4 text-gray-700 hover:text-white hover:bg-blue-500 rounded-md p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </nav>
    

      <div className="flex flex-row justify-center mb-5 mx-3 mt-4 gap-4">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleCategoryChange(category.value)}
            className="bg-gray-200 py-2 px-4 rounded-md min-w-fit hover:bg-orange-800 font-semibold transition-all duration-2"
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="flex flex-row justify-center mb-5 mx-3 mt-4 gap-4">
        <select
          value={country}
          onChange={handleCountryChange}
          className="bg-gray-200 py-2 px-4 rounded-md"
        >
          <option value="">All Countries</option>
          <option value="us">United States</option>
          <option value="in">India</option>
          <option value="uk">United Kingdom</option>
          {/* add more countries here */}
        </select>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center mb-5 mx-3 mt-4 gap-6">
          {filteredNews.map((newsItem, index) => (
            <Card key={newsItem.id || index} data={newsItem} className="w-1/3 pr-4 mb-4" />
          ))}
        </div>
      )}

      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default NewsApp;