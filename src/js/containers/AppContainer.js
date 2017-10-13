import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { setSaying } from '../actions/AppActions';
import {
  Cart,
  Product,
  CheckoutButton,
  cartLocalization,
  setCartCurrency,
} from 'react-shopping-cart';
import Checkout from 'react-checkout';

const { getDefaultLocalization } = cartLocalization;

const iPadCaseLocalization = {
  color: 'Color',
  iPadCase: 'iPad case',
  red: 'Red',
  green: 'Green',
  yellow: 'Yellow',
  GBP: '£',
  EUR: '€',
  USD: '$',
};

const iPadPropertiesWithAdditionalCostLocalization = {
  yellow: 'Yellow',
};

let  state = {
    product: {
      name: 'iPadCase',
      id: 'ipad-case',
      path: '/shop/ipad-case/',
      properties: {
        color: ['red', 'green', {
          additionalCost: {
            GBP: 1,
            EUR: 2,
            USD: 3.50,
          },
          value: 'yellow',
        }],
      },
      propertiesToShowInCart: ['color'],
      prices: { GBP: 70, EUR: 80, USD: 90 },
      currency: 'GBP',
      imageSrc: '1-483x321.jpeg',
    },
    getProductLocalization:
      getDefaultLocalization(
        'product',
        'en',
        {
          ...iPadCaseLocalization,
          ...iPadPropertiesWithAdditionalCostLocalization
        }
      ),
    getCheckoutButtonLocalization:
      getDefaultLocalization(
        'checkoutButton',
        'en',
        iPadCaseLocalization,
      ),
    getCartLocalization:
      getDefaultLocalization(
        'cart',
        'en',
        iPadCaseLocalization
      )
  };
  const checkoutButtonElement =
        <CheckoutButton
          getLocalization={
            state.getCheckoutButtonLocalization
          }
          checkoutURL="/to/my/checkout"
        />;

let GreetComponent = (props) => (
  <h1>{props.saying}, {props.match.params.name}!</h1>
);

const mapStateToProps = (state) => ({
  saying: state.AppReducer.get('greetOrBye'),
});

GreetComponent = connect(mapStateToProps)(GreetComponent);


const AppContainer = (props) => (
  <div>
    <Route path="/:name" component={GreetComponent}/>
    <Product
            {...state.product}
            checkoutButton={checkoutButtonElement}
            getLocalization={
              state.getProductLocalization
            }
    />
    <Cart
            checkoutButton={checkoutButtonElement}
            getLocalization={
              state.getCartLocalization
            }
      />
      <Checkout
        store={props.store}
        amountPrefix="Pay $"
        testStripeKey="pk_test_ry8ALrWRqEItYo3DQDAOynVH"
        liveStripeKey="pk_live_czjLJx8fbS6L6KvQIlItvPvY"
        endpoint="https://3kh1a4zr83.execute-api.eu-west-1.amazonaws.com/prod/v1/stripe/create"
        fields={[
          "name=*|John Doe",
          "email=*email|john@example.com",
          "phone=tel|+44 207 123 4567",
          "number=*|4242 4242 4242 4242|Long number on the front of your card|Card Number",
          "cvc=*|123|The 3 digits to the right of the signature strip located on the back of your card|CVC",
          "exp=*|10/17||Expiry Date",
          "address=*6|1 Chapel Hill, Heswall, BOURNEMOUTH, UK, BH1 1AA|The address where your order will be shipped",
        ]}
      />
    <button onClick={() => props.say('Hello')}>Say Hello</button>
    <button onClick={() => props.say('Goodbye')}>Say Goodbye</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  say: (saying) => dispatch(setSaying(saying)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
