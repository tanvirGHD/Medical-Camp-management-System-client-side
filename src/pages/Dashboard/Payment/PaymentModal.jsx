
import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

//TODO: add Publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PaymentModal = ({ paymentModal, setPaymentModal }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    fees: 0, // Default value if paymentModal is not yet available
  });

  // Update paymentInfo whenever paymentModal changes
  useEffect(() => {
    if (paymentModal && paymentModal.campFees) {
      setPaymentInfo({
        fees: paymentModal.campFees,
        campName: paymentModal.campName,
        participantName: paymentModal.participantName
      });
    }
  }, [paymentModal]); // Dependency on paymentModal to re-render when it changes

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-3/4 lg:w-1/2">
        <h2 className="text-xl mb-4">Payment Information</h2>
        {paymentModal ? (
          <>
            <p>
              <strong>Camp Name:</strong> {paymentModal.campName}
            </p>
            <p>
              <strong>Camp Fees:</strong> {paymentModal.campFees}
            </p>
            <p>
              <strong>Participant Name:</strong> {paymentModal.participantName}
            </p>
          </>
        ) : (
          <p>Loading payment details...</p>
        )}

        {/* Payment */}
        <Elements stripe={stripePromise}>
          <CheckoutForm paymentInfo={paymentInfo} />
        </Elements>

        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => setPaymentModal(null)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
