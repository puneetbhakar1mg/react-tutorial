import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { useBasename, createMemoryHistory } from 'history';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import crateRoutes from './app/routes.js';
import rootReducer from './app/reducers';

exports.handleRender = (req, res) => {
  const html = `<html>
  <head>
    <title>
      Render a stateless component
    </title>

  </head>
  <body>
    <div id="container">
    </div>
    <script src="bundle.js"></script>
  </body>
</html>`;
  const renderPage = (markup, preloadedState) => `<html>
  <head>
    <title>
      Render a stateless component
    </title>

  </head>
  <body>
    <div id="container">
      <div>${markup}<div>
    </div>
    <script src="bundle.js"></script>
    <script>window.__PRELOAD__=${JSON.stringify(preloadedState)}</script>
  </body>
</html>`;
  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions for API calls
    )
  );
  match({ routes: crateRoutes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }
    let markup;
    if (renderProps) {
      // console.log(renderProps);
      const getReduxPromise = () => {
        const { location, params } = renderProps;
        const coo = renderProps.components[renderProps.components.length - 1];
        const comp = coo.WrappedComponent;
        const promise = comp.fetchData ?
          comp.fetchData({ location, params, store }) :
          Promise.resolve();
        return promise;
      }
      getReduxPromise().then(() => {
        const reduxStore = store.getState();
        const preloadedState = JSON.stringify(reduxStore);
        markup = ReactDOMServer.renderToString(
          <Provider store={store}>
            {<RouterContext {...renderProps} />}
          </Provider>, (errr) => {
          console.log(errr);
        });
        res.send(renderPage(markup, preloadedState));
      });
    } else {
      res.status(404);
    }
  });
  //res.send(html);
};
