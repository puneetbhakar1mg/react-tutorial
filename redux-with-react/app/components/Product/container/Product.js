import { connect } from 'react-redux';

import ProductPresentational from '../presentational/Product';

const mapStateToProps = (state) => ({
  product: state.sampleApp.products[100],
});

const Product = connect(mapStateToProps)(ProductPresentational);

export default Product;
