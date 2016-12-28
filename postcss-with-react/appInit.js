import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { hashHistory as browserHistory } from 'react-router';


import routes from './app/routes';
import reducers from './app/reducers';



// Apply the middleware to the store
const reactRouterMiddleware = routerMiddleware(browserHistory);

// Add the reducer to your store on the `routing` key
const store = createStore(
  reducers,
  {},
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions for API calls
    reactRouterMiddleware // lets us dispatch() functions related to React-Router-Redux
  )
);

render((
  <Provider store={store}>
    <Router
      history={browserHistory}
    >
      {routes}
    </Router>
  </Provider>
), document.getElementById('container'));
