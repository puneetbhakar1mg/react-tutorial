import React, { PropTypes } from 'react';

const Category = (props) => {
  const categories = props.categories;

  return (<div>
  {categories.map(category => <h4 key={category}><a href="#/product" >{category}</a></h4>)}
  </div>);
};

Category.propTypes = {
  categories: PropTypes.any
};

export default Category;
