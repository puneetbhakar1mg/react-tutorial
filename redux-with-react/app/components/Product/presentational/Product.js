import React, { PropTypes } from 'react';

const Product = (props) => {
  const product = props.product;
  return (<div>
    <h3>{product.name}</h3>
    <h5>{product.brand}</h5>
    <div>{product.currency} {product.price}</div>
    <div>{product.description}</div>
  </div>);
};

Product.propTypes = {
};

export default Product;
