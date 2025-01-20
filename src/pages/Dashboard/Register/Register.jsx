
import Swal from "sweetalert2";
import useRegister from "../../../hook/useRegister";
import useAxiosRegister from "../../../hook/useAxiosRegister";
import { useState } from "react";
import PaymentModal from "../Payment/PaymentModal"; // Import PaymentModal component

const Register = () => {
  const [register, loading, refetch] = useRegister();
  const axiosRegister = useAxiosRegister();
  const [paymentModal, setPaymentModal] = useState(null); // Payment Modal State

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosRegister.delete(`/registerCamps/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire(
              "Cancelled!",
              "Your registration has been cancelled.",
              "success"
            );
          }
        });
      }
    });
  };

  const totalFees = register.reduce((accumulator, currentFees) => {
    const fee = parseFloat(
      String(currentFees.campFees).trim().replace("$", "")
    );
    return accumulator + (isNaN(fee) ? 0 : fee);
  }, 0);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl">Total Registration: {register.length}</h2>
        <h2 className="text-3xl">Total Fees: ${totalFees}</h2>
      </div>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">#</th>
            <th className="border border-gray-400 px-4 py-2">Camp Name</th>
            <th className="border border-gray-400 px-4 py-2">Camp Fees</th>
            <th className="border border-gray-400 px-4 py-2">
              Participant Name
            </th>
            <th className="border border-gray-400 px-4 py-2">Payment Status</th>
            <th className="border border-gray-400 px-4 py-2">
              Confirmation Status
            </th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {register.map((camp, index) => (
            <tr key={camp._id} className="text-center">
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">
                {camp.campName}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {camp.campFees}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {camp.participantName}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {camp.paymentStatus === "paid" ? "Paid" : "Unpaid"}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  className={`${
                    camp.paymentStatus === "paid" &&
                    camp.confirmationStatus === "Pending"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-500"
                  } px-4 py-2 rounded`}
                  disabled={
                    camp.paymentStatus !== "paid" ||
                    camp.confirmationStatus === "Confirmed"
                  }
                >
                  {camp.confirmationStatus === "Confirmed"
                    ? "Confirmed"
                    : "Pending"}
                </button>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  className="bg-blue-300 p-2 rounded-lg"
                  onClick={() => setPaymentModal(camp)} // Open Payment Modal
                >
                  Pay
                </button>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  className={`${
                    camp.paymentStatus === "paid" &&
                    camp.confirmationStatus === "Confirmed"
                      ? "bg-gray-300 text-gray-500"
                      : "bg-red-500 text-white"
                  } px-4 py-2 rounded`}
                  onClick={() => handleCancel(camp._id)}
                  disabled={
                    camp.paymentStatus === "paid" &&
                    camp.confirmationStatus === "Confirmed"
                  }
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Payment Modal */}
      {paymentModal && (
        <PaymentModal paymentModal={paymentModal} setPaymentModal={setPaymentModal} />
      )}
    </div>
  );
};

export default Register;
