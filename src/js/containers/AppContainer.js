import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {
  Cart,
  Product,
  CheckoutButton,
  cartLocalization,
  setCartCurrency,
} from 'react-shopping-cart';
import Checkout from 'react-checkout';

const { getDefaultLocalization } = cartLocalization;

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
      prices: { USD: 90 },
      currency: 'USD',
      imageSrc: '1-483x321.jpeg',
    },
    getProductLocalization:
      getDefaultLocalization(
        'product',
        'en',
        {
          color: 'Color',
          iPadCase: 'iPad case',
          red: 'Red',
          green: 'Green',
          yellow: 'Yellow',
          GBP: '£',
          EUR: '€',
          USD: '$',
          yellow: 'Yellow',

        }
      ),
    getCheckoutButtonLocalization:
      getDefaultLocalization(
        'checkoutButton',
        'en',
        {color: 'Color',
        iPadCase: 'iPad case',
        red: 'Red',
        green: 'Green',
        yellow: 'Yellow',
        GBP: '£',
        EUR: '€',
        USD: '$',}
      ),
    getCartLocalization:
      getDefaultLocalization(
        'cart',
        'en',
        {color: 'Color',
        iPadCase: 'iPad case',
        red: 'Red',
        green: 'Green',
        yellow: 'Yellow',
        GBP: '£',
        EUR: '€',
        USD: '$',}
      )
  };
  const checkoutButtonElement =
        <CheckoutButton
          checkoutURL="/to/my/checkout"
        />;




const AppContainer = (props) => (
  <div>
    {console.log('hello', props)}
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

  </div>
);


export default AppContainer;
