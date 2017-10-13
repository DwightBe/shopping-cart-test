import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';
import {
  setCartCurrency,
} from 'react-shopping-cart';
import Checkout from 'react-checkout';

const history = createHistory();
const store = configureStore(history);

store.dispatch(
  setCartCurrency('USD'),
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={AppContainer}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);