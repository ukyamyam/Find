// This component handles item registration form and submission
import React, { useState } from 'react';
import { registerItem } from '../api';

export default function RegisterItem() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission and register item
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerItem({ name, description, location, imageUrl });
    if (res && res.success) {
      setMessage(`Item registered! +${res.tokensEarned} coins awarded`);
      setName('');
      setDescription('');
      setLocation('');
      setImageUrl('');
    } else {
      setMessage('Registration failed');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Register Lost Item</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name (e.g. AirPods)" className="border p-1 w-full" required />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border p-1 w-full" required />
        <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="border p-1 w-full" required />
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL (mock)" className="border p-1 w-full" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
      </form>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}
