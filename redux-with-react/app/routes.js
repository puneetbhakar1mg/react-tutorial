import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import App from './index';
import ProductList from './components/ProductList/container/ProductList';
import Product from './components/Product/container/Product';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductList} />
    <Route path="product/:id" component={Product} />
  </Route>
);
