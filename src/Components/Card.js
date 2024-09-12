import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={data.image} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{data.title}</h2>
        <p className="text-gray-700 text-base">{data.description}</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.open(data.url)}>Read More</button>
      </div>
    </div>
  );
};

export default Card;