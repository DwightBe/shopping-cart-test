import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import AppReducer from './AppReducer';
import {
  cartReducer,
} from 'react-shopping-cart';
import 'bootstrap/dist/css/bootstrap.css';
import { formReducer, order } from 'react-checkout';

const rootReducer = combineReducers({
  AppReducer,
  router: routerReducer,
  cart: cartReducer,
  simpleform: formReducer
});

export default rootReducer;
