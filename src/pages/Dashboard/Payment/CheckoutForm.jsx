import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
 const [error, setError] = useState('')
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
        setError('')
    }
  };

  return (
    <div className="bg-white py-16 px-8 w-10/12 sm:w-7/12 mx-auto rounded-xl shadow-lg mt-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Payment</h1>
      </div>
      <form className="w-full sm:w-9/12 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-6">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
          type="submit"
          disabled={!stripe}
        >
          Pay Now
        </button>
        <p className="text-red-600 text-lg mt-3">{error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
