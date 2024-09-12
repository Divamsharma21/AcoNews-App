// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import Card from './Card'

// const NewsApp = () => {
//   const [searchTerm, setSearchTerm] = useState('India');
//   const [news, setNews] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const API_KEY = '0e5496758438100eb4f4a77f54d19fa7';
 
//   const fetchNews = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://gnews.io/api/v4/search?q=${searchTerm}&apikey=${API_KEY}`)
//       const data = await response.json();
//       setNews(data.articles);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, [searchTerm, API_KEY]);

//   useEffect(() => {
//     fetchNews();
//   }, [searchTerm]);

//   const handleSearch = (event) => {
//     event.preventDefault();
//     setSearchTerm(event.target.value);
//   };

//   const filteredNews = news?.filter((newsItem) => {
//     return newsItem.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }) ?? [];

 
//   return (
//     <>
//       <div>
//         <Navbar />
//         <input
//           type="search"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Search news titles..."
//           className="bg-gray-200 py-2 px-4 rounded-md w-full"
//         />
//       </div>

//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="flex flex-wrap justify-center mb-5 mx-3 mt-4 gap-6">
//         {filteredNews.map((newsItem, index) => (
//           <Card key={newsItem.id || index} data={newsItem} className="w-1/3 pr-4 mb-4" />
//         ))}
//       </div>
//       )}

//       {error && <div>Error: {error}</div>}
//     </>
//   );
// };

// export default NewsApp;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Card from './Card';

const NewsApp = () => {
  const [searchTerm, setSearchTerm] = useState('India');
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = '0e5496758438100eb4f4a77f54d19fa7';

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://gnews.io/api/v4/search?q=${searchTerm}&apikey=${API_KEY}`)
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
  }, [searchTerm, API_KEY]);

  useEffect(() => {
    fetchNews();
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
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
    <>
      <div>
        <Navbar   
        value={searchTerm}
          onChange={handleSearch}
            onClick={fetchNews}
          />
        <div className="flex flex-row justify-center mb-5 mx-3 mt-4 gap-4    ">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className="bg-gray-200 py-2 px-4 rounded-md min-w-fit hover:bg-orange-800  font-semibold transition-all duration-2"
            >
              {category.label}
            </button>
          ))}
        </div>
        {/* <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search news titles..."
          className="bg-gray-200 py-2 px-4 rounded-md w-full"
        /> */}
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
    </>
  );
};

export default NewsApp;