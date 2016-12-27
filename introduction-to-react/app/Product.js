import React from 'react';
import data from './productData';

/**
 * Stateless react component
 *
 */
const Product = () => {
  return (
    <div>
      {data.name}
    </div>
  );
};

export default Product;
