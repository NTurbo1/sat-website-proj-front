import { apiEndpoints } from "../api/apiEndpoints";

export const STRIPE_API_KEY = import.meta.env.VITE_STRIPE_API_KEY;

export const handlePayment = async (token, email, courseId) => {
  try {
    const response = await fetch(
      apiEndpoints.paymentCharge, 
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          token: token.id,
          email: email,
          courseId: courseId
        },
      }
    );

    if (response.ok) {
      alert("Payment Success");
    } else {
      alert("Failed to make payment: " + response.statusText);
    }

  } catch(error) {
    console.error("An error occurred:", error);
  }
}