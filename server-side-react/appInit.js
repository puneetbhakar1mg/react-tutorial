import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import { createStore,compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { hashHistory as browserHistory } from 'react-router';
import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';


import routes from './app/routes';
import reducers from './app/reducers';


// Apply the middleware to the stor

// Add the reducer to your store on the `routing` key
const reduxState = {};
if (window.__PRELOAD__) {
  try {
    const plain = JSON.parse((window.__PRELOAD__));
    _.each(plain, (val, key) => {
      reduxState[key] = val;
    });
  } catch (e) {
    console.log('error in doctors');
  }
}
const store = createStore(
  reducers,
  reduxState,
  compose(
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions for API calls
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
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
