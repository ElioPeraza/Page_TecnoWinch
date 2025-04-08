import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { products } from '../data/products';

const Winches = () => {
  const winches = products.filter(product => product.category === 'winches');

  return (
    <div className="winches-page">
      <h2>Winches</h2>
      <CategoryGrid title="Catálogo de Winches" products={winches} />
    </div>
  );
};

export default Winches;
