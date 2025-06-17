import React, { useState, useEffect } from 'react';
import { fetchItems, purchaseItem, fetchCoinBalance } from '../api';

export default function Auction() {
  const [items, setItems] = useState([]);
  const [coins, setCoins] = useState(0);
  const [message, setMessage] = useState('');

  // Initial fetch for auction items and coin balance
  useEffect(() => {
    fetchItems().then(setItems);
    fetchCoinBalance().then((data) => setCoins(data.total || 0));
  }, []);

  // Handle item purchase and update coin balance
  const handlePurchase = async (itemId) => {
    const res = await purchaseItem(itemId);
    if (res && res.success) {
      setMessage(`Purchased successfully! -${res.cost} coins`);
      setCoins((prev) => prev - res.cost);
    } else {
      setMessage('Purchase failed');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Auction Market</h2>
      <p className="mb-2">Coin Balance: {coins}</p>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items
          .filter((item) => item.status === 'auction')
          .map((item) => (
            <div key={item._id} className="border p-2 rounded shadow">
              <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover mb-2" />
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.description}</p>
              <p className="text-sm text-gray-600">Location: {item.location}</p>
              <button
                onClick={() => handlePurchase(item._id)}
                className="mt-2 bg-green-600 text-white px-4 py-1"
              >
                Buy for 50 coins
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}