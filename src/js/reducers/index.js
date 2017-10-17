import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  cartReducer,
} from 'react-shopping-cart';
import 'bootstrap/dist/css/bootstrap.css';
import { formReducer } from 'react-checkout';

const rootReducer = combineReducers({
  router: routerReducer,
  cart: cartReducer,
  simpleform: formReducer
});

export default rootReducer;
