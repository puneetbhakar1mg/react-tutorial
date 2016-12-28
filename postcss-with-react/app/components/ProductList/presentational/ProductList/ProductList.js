import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styleCss from './ProductList.css';

const ProductList = (props) => {
  const pl = props.productList;
  const products = Object.keys(pl);

  // Inline styling for componenet
  // const styles = {
  //   list: {
  //     listStyle: 'none',
  //     paddingLeft: 0
  //   }
  // };

  return (<ol styleName="list">
  {products.map(key => <li key={key}><a styleName="product-name" href={`#/product/${key}`} >{pl[key].name}</a></li>)}
  </ol>);
};

ProductList.propTypes = {
  productList: PropTypes.object.isRequired
};

export default cssModules(ProductList, styleCss);
