import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { products } from '../data/products';

const Correas = () => {
  const correas = products.filter(product => product.category === 'correas');

  return (
    <div className="correas-page">
      <h2>Correas</h2>
      <CategoryGrid title="Catálogo de Correas" products={correas} />
    </div>
  );
};

export default Correas;
