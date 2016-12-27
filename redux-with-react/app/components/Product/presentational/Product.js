import React, { PropTypes } from 'react';

const Product = (props) => {
  const { productList, params } = props;
  const product = productList[params.id];
  return (<div>
    <h3>{product.name}</h3>
    <h5>{product.brand}</h5>
    <div>{product.currency} {product.price}</div>
    <div>{product.description}</div>
    <input type="text" name="modifyDescription" onKeyUp={e => (props.onKeyUp(e.target.value, params.id))} />
  </div>);
};

Product.propTypes = {
  productList: PropTypes.object,
  params: PropTypes.object,
  onKeyUp: PropTypes.func
};

export default Product;
