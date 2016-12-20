import { connect } from 'react-redux';
import action from '../../../actions';
import ProductPresentational from '../presentational/Product';

const mapStateToProps = (state) => ({
  product: state.sample.products[100],
});

const mapDispatchToProps = (dispatch) => ({
  onKeyP: (desc) => {
    dispatch(action.modifyProduct(desc));
  }
});

const Product = connect(mapStateToProps, mapDispatchToProps)(ProductPresentational);

export default Product;
