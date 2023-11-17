import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { handlePayment } from '../../../../../utils/payment/stripe';
import { STRIPE_API_KEY } from '../../../../../utils/payment/stripe';

const CourseBuyButtonAfterLogIn = ({ course }) => {
  return (
    <StripeCheckout 
      stripeKey={STRIPE_API_KEY}
      token={(token) => {
        handlePayment(token, token.email, course.id);
      }}
    >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Buy Now
      </button>
    </StripeCheckout>
  )
}

export default CourseBuyButtonAfterLogIn