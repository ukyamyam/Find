// This component provides keyword and voice-based item search functionality
import React, { useState, useEffect } from 'react';
import { fetchItems } from '../api';

export default function ItemList() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  // Use Web Speech API to capture voice input for search
  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
    };
    recognition.start();
  };

  // Fetch items based on search query
  useEffect(() => {
    if (query.trim() !== '') {
      fetchItems(query).then(setItems);
    }
  }, [query]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Search Items (with Voice)</h2>
      <div className="flex space-x-2 mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by keyword"
          className="border p-1 flex-1"
        />
        <button onClick={handleVoiceSearch} className="bg-gray-500 text-white px-3">🎤</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item._id} className="border p-2 rounded shadow">
            <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.description}</p>
            <p className="text-sm text-gray-600">Location: {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}