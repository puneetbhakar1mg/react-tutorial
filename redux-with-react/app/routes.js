import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import App from './index';
import Category from './components/Category/container/Category';
import Product from './components/Product/container/Product';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Category} />
    <Route path="product" component={Product} />
  </Route>
);
