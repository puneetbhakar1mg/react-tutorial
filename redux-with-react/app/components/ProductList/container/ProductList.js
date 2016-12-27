import { connect } from 'react-redux';

import ProductListPresentational from '../presentational/ProductList';

const mapStateToProps = state => ({
  productList: state.sample.productList,
});

const ProductList = connect(mapStateToProps)(ProductListPresentational);

export default ProductList;
