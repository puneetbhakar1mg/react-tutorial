import React, { PropTypes } from 'react';

const ProductList = (props) => {
  const pl = props.productList;
  const products = Object.keys(pl);

  return (<ul>
  {products.map(key => <li key={key}><a href={`#/product/${key}`} >{pl[key].name}</a></li>)}
  </ul>);
};

ProductList.propTypes = {
  productList: PropTypes.object.isRequired
};

export default ProductList;
