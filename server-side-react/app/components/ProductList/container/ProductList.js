import { connect } from 'react-redux';
import action from '../../../actions';
import ProductListPresentational from '../presentational/ProductList';

const mapStateToProps = state => ({
  productList: state.sample.productList,
  specialityList: state.sample.specialityList
});

const mapDispatchToProps = dispatch => ({
  getAllspecialities: () => {
    dispatch(action.getDummySpeciality());
  }
});

const ProductList = connect(mapStateToProps, mapDispatchToProps)(ProductListPresentational);

export default ProductList;
