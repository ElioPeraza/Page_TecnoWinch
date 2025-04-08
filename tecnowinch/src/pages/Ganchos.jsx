import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { products } from '../data/products';

const Ganchos = () => {
  const ganchos = products.filter(product => product.category === 'ganchos');

  return (
    <div className="ganchos-page">
      <h2>Ganchos</h2>
      <CategoryGrid title="Catálogo de Ganchos" products={ganchos} />
    </div>
  );
};

export default Ganchos;
