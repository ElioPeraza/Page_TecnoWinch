import React from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';
import '../css/CategoryGrid.css'; // ✅ este import es esencial

const CategoryGrid = ({ title, products }) => {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <div className="category-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

CategoryGrid.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default CategoryGrid;
