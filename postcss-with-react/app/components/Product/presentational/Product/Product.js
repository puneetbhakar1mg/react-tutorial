import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styleCss from './Product.css';

const Product = (props) => {
  const { productList, params } = props;
  const product = productList[params.id];
  return (<div>
    <div styleName="name">{product.name}</div>
    <div styleName="manufacturer">{product.brand}</div>
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

export default cssModules(Product, styleCss);
