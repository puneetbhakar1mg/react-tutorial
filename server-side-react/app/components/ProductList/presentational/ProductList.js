import React, { Component, PropTypes } from 'react';
import action from '../../../actions';

class ProductList extends Component {
  static fetchData({ store }) {
    return store.dispatch(action.getDummySpeciality());
  }
  componentDidMount() {
    this.props.getAllspecialities();
  }
  render() {
    const {specialityList} = this.props;
    const pl = this.props.productList;
    const products = Object.keys(pl);

    return (<ul>
    {specialityList.map((da,i)=>{return <li key={i}>{da.name}</li>})}
    </ul>);
  }
}

ProductList.propTypes = {
  productList: PropTypes.object.isRequired,
  specialityList: PropTypes.any
};

export default ProductList;
