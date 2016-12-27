import { connect } from 'react-redux';
import action from '../../../actions';
import ProductPresentational from '../presentational/Product';

const mapStateToProps = state => ({
  productList: state.sample.productList,
});

const mapDispatchToProps = dispatch => ({
  onKeyUp: (desc, id) => {
    dispatch(action.modifyProduct(desc, id));
  }
});

const Product = connect(mapStateToProps, mapDispatchToProps)(ProductPresentational);

export default Product;
