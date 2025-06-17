import React from 'react';
import RegisterItem from './components/RegisterItem';
import ItemList from './components/ItemList';
import Auction from './components/Auction';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Find App MVP</h1>
      <RegisterItem />
      <hr className="my-6" />
      <ItemList />
      <hr className="my-6" />
      <Auction />
    </div>
  );
}