import React, { useEffect } from "react";
import { STRIPE_API_KEY, handlePayment } from "../../../../utils/payment/stripe";
import StripeCheckout from "react-stripe-checkout";
import { useAuth } from "../../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import pageUrls from "../../../../utils/pageUrls";

const AvailableCourseCard = ({ course }) => {

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm">
      <h2 className="text-xl font-bold mb-2">{course.name}</h2>
      <p className="text-gray-700 text-base mb-4">{course.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-900 text-lg font-bold">
          {course.price} <span className='text-normal font-bold font-mono'>₸</span>
        </span>

        {
          isLoggedIn ?  
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
            :
            <button 
              onClick={() => {
                navigate(pageUrls.login);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Buy Now
            </button>
        }
      </div>
    </div>
  );
};

export default AvailableCourseCard;