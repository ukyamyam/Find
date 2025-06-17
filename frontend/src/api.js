const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const registerItem = async (data) => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const fetchItems = async (query = '') => {
  const res = await fetch(`${BASE_URL}/search?query=${query}`);
  return await res.json();
};

export const purchaseItem = async (itemId) => {
  const res = await fetch(`${BASE_URL}/items/${itemId}/purchase`, {
    method: 'POST'
  });
  return await res.json();
};

export const fetchCoinBalance = async () => {
  const res = await fetch(`${BASE_URL}/coins`);
  return await res.json();
};
