import { connect } from 'react-redux';

import action from '../../../actions';

import CategoryPresentational from '../presentational/Category';

const mapStateToProps = (state) => ({
  categories: state.sampleApp.categories,
});

const Category = connect(mapStateToProps)(CategoryPresentational);

export default Category;
