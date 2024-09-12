import React, { useState } from "react";
// import Card from "./Card";
import axios from "axios"; // Add this line to import axios
 

const Navbar = ({ value, onchange,fetchNews }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Add this line to store the search term
  const [searchResults, setSearchResults] = useState([]); // Add this line to store the search results

  const handleSearch = async event => {
    event.preventDefault(); 
      
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything`, {
        params: {
          q: searchTerm, // Pass the search term as a parameter
          apiKey: "0e5496758438100eb4f4a77f54d19fa" // Replace with your actual API key
        }
      });
      const newsData = response.data.articles;
      setSearchResults(newsData); // Update the search results state
      console.log(newsData);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-between items-center h-16 bg-gray-900 text-white">
      <div className="flex items-center font-extrabold to-blue-600 ml-4">
       
        <h1>AcoNews</h1>
      </div>
      <div className="flex items-center">
        <input
          type="search"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          placeholder="Search news..."
          className="bg-gray-200 py-2 px-4 rounded-md mr-4"
        />
        <button
          type="submit"
          onClick={fetchNews}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md  mr-10"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
