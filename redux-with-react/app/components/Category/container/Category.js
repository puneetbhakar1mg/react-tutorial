import { connect } from 'react-redux';

import CategoryPresentational from '../presentational/Category';

const mapStateToProps = (state) => ({
  categories: state.sample.categories,
});

const Category = connect(mapStateToProps)(CategoryPresentational);

export default Category;
