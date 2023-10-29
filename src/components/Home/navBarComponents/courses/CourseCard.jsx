import React from "react";
import { STRIPE_API_KEY, handlePayment } from "../../../../utils/payment/stripe";
import StripeCheckout from "react-stripe-checkout";
import { useAuth } from "../../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import pageUrls from "../../../../utils/pageUrls";

const CourseCard = ({ course }) => {

  const { checkJwtTokenExpiration } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm">
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-700 text-base mb-4">{course.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-900 text-lg font-bold">{course.price}</span>

        {
          checkJwtTokenExpiration() === false ? 
            <button 
              onClick={() => {
                navigate(pageUrls.login);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Buy Now
            </button> 
          :
            <StripeCheckout 
              stripeKey={STRIPE_API_KEY}
              token={(token) => {
                handlePayment(token, course.price);
              }}
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </StripeCheckout>
        }
      </div>
    </div>
  );
};

export default CourseCard;