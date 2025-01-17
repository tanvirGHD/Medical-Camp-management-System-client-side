
// import Swal from "sweetalert2";
// import useRegister from "../../../hook/useRegister";
// import useAxiosRegister from "../../../hook/useAxiosRegister";

// const Register = () => {
//   const [register, loading, refetch] = useRegister();
//   const axiosRegister = useAxiosRegister();

//   const handleConfirm = (campId) => {
//     console.log(`Confirming camp with ID: ${campId}`);
//     // Your confirmation logic here
//   };

//   const handleCancel = (id) => {
//     console.log(`Cancelling registration for camp with ID: ${id}`);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosRegister.delete(`/registerCamps/${id}`).then((res) => {
//           if (res.data.deletedCount > 0) {
//             refetch();  // Refetch to update the list
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success",
//             });
//           }
//         });
//       }
//     });
//   };

//   const handlePay = (campId) => {
//     console.log(`Paying for camp with ID: ${campId}`);
//     // Your payment logic here
//   };

//   const totalFees = register.reduce((accumulator, currentFees) => {
//     const fee = parseFloat(currentFees.campFees.trim().replace("$", ""));
//     return accumulator + (isNaN(fee) ? 0 : fee);
//   }, 0);

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl">Total Registration: {register.length}</h2>
//         <h2 className="text-3xl">Total Fees: ${totalFees}</h2>
//       </div>
//       <table className="table-auto border-collapse border border-gray-400 w-full">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-400 px-4 py-2">#</th>
//             <th className="border border-gray-400 px-4 py-2">Camp Name</th>
//             <th className="border border-gray-400 px-4 py-2">Camp Fees</th>
//             <th className="border border-gray-400 px-4 py-2">Participant Name</th>
//             <th className="border border-gray-400 px-4 py-2">Payment Status</th>
//             <th className="border border-gray-400 px-4 py-2">Confirmation Status</th>
//             <th className="border border-gray-400 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {register.map((camp, index) => (
//             <tr key={camp._id} className="text-center">
//               <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
//               <td className="border border-gray-400 px-4 py-2">{camp.campName}</td>
//               <td className="border border-gray-400 px-4 py-2">{camp.campFees}</td>
//               <td className="border border-gray-400 px-4 py-2">{camp.participantName}</td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {camp.paymentStatus === "paid" ? "Paid" : "Unpaid"}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 <button
//                   className={`${
//                     camp.paymentStatus === "paid" &&
//                     camp.confirmationStatus === "Pending"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-300 text-gray-500"
//                   } px-4 py-2 rounded`}
//                   disabled={
//                     camp.paymentStatus !== "paid" ||
//                     camp.confirmationStatus === "Confirmed"
//                   }
//                   onClick={() => handleConfirm(camp._id)}
//                 >
//                   {camp.confirmationStatus === "Confirmed"
//                     ? "Confirmed"
//                     : "Pending"}
//                 </button>
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 <button
//                   className={`${
//                     camp.paymentStatus === "paid"
//                       ? "bg-gray-300 text-gray-500"
//                       : "bg-green-500 text-white"
//                   } px-4 py-2 rounded`}
//                   onClick={() => handlePay(camp._id)}
//                   disabled={camp.paymentStatus === "paid"}
//                 >
//                   {camp.paymentStatus === "paid" ? "Paid" : "Pay"}
//                 </button>
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 <button
//                   className={`${
//                     camp.paymentStatus === "paid" &&
//                     camp.confirmationStatus === "Confirmed"
//                       ? "bg-gray-300 text-gray-500"
//                       : "bg-red-500 text-white"
//                   } px-4 py-2 rounded`}
//                   onClick={() => handleCancel(camp._id)}
//                   disabled={
//                     camp.paymentStatus === "paid" &&
//                     camp.confirmationStatus === "Confirmed"
//                   }
//                 >
//                   Cancel
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Register;








// import Swal from "sweetalert2";
// import useRegister from "../../../hook/useRegister";
// import useAxiosRegister from "../../../hook/useAxiosRegister";
// import { useState } from "react";

// const Register = () => {
//   const [register, loading, refetch] = useRegister();
//   const axiosRegister = useAxiosRegister();
//   const [feedbackModal, setFeedbackModal] = useState(null);  // For Feedback Modal

//   const handleConfirm = (campId) => {
//     console.log(`Confirming camp with ID: ${campId}`);
//     // Your confirmation logic here
//     // Update the confirmation status here
//     axiosRegister
//       .patch(`/registerCamps/confirm/${campId}`)
//       .then(() => {
//         refetch();
//         Swal.fire({
//           title: "Confirmed",
//           text: "Camp has been confirmed.",
//           icon: "success",
//         });
//       });
//   };

//   const handleCancel = (id) => {
//     console.log(`Cancelling registration for camp with ID: ${id}`);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, cancel it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosRegister.delete(`/registerCamps/${id}`).then((res) => {
//           if (res.data.deletedCount > 0) {
//             refetch();  // Refetch to update the list
//             Swal.fire({
//               title: "Cancelled!",
//               text: "Your registration has been cancelled.",
//               icon: "success",
//             });
//           }
//         });
//       }
//     });
//   };

//   const handlePay = (campId) => {
//     console.log(`Paying for camp with ID: ${campId}`);
//     // Payment logic (Stripe Integration)
//     // Assume payment is successful here
//     axiosRegister
//       .patch(`/registerCamps/pay/${campId}`, { paymentStatus: "paid" })
//       .then((response) => {
//         refetch();
//         Swal.fire({
//           title: "Payment Successful",
//           text: `Transaction ID: ${response.data.transactionId}`,
//           icon: "success",
//         });
//       });
//   };

//   const handleFeedback = (campId) => {
//     // Show Feedback Modal
//     setFeedbackModal(campId);
//   };

//   const totalFees = register.reduce((accumulator, currentFees) => {
//     const fee = parseFloat(currentFees.campFees.trim().replace("$", ""));
//     return accumulator + (isNaN(fee) ? 0 : fee);
//   }, 0);

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl">Total Registration: {register.length}</h2>
//         <h2 className="text-3xl">Total Fees: ${totalFees}</h2>
//       </div>
//       <table className="table-auto border-collapse border border-gray-400 w-full">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-400 px-4 py-2">#</th>
//             <th className="border border-gray-400 px-4 py-2">Camp Name</th>
//             <th className="border border-gray-400 px-4 py-2">Camp Fees</th>
//             <th className="border border-gray-400 px-4 py-2">Participant Name</th>
//             <th className="border border-gray-400 px-4 py-2">Payment Status</th>
//             <th className="border border-gray-400 px-4 py-2">Confirmation Status</th>
//             <th className="border border-gray-400 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {register.map((camp, index) => (
//             <tr key={camp._id} className="text-center">
//               <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
//               <td className="border border-gray-400 px-4 py-2">{camp.campName}</td>
//               <td className="border border-gray-400 px-4 py-2">{camp.campFees}</td>
//               <td className="border border-gray-400 px-4 py-2">{camp.participantName}</td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {camp.paymentStatus === "paid" ? "Paid" : "Unpaid"}
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 <button
//                   className={`${
//                     camp.paymentStatus === "paid" &&
//                     camp.confirmationStatus === "Pending"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-300 text-gray-500"
//                   } px-4 py-2 rounded`}
//                   disabled={camp.paymentStatus !== "paid" || camp.confirmationStatus === "Confirmed"}
//                   onClick={() => handleConfirm(camp._id)}
//                 >
//                   {camp.confirmationStatus === "Confirmed" ? "Confirmed" : "Pending"}
//                 </button>
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 <button
//                   className={`${
//                     camp.paymentStatus === "paid"
//                       ? "bg-gray-300 text-gray-500"
//                       : "bg-green-500 text-white"
//                   } px-4 py-2 rounded`}
//                   onClick={() => handlePay(camp._id)}
//                   disabled={camp.paymentStatus === "paid"}
//                 >
//                   {camp.paymentStatus === "paid" ? "Paid" : "Pay"}
//                 </button>
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 <button
//                   className={`${
//                     camp.paymentStatus === "paid" && camp.confirmationStatus === "Confirmed"
//                       ? "bg-gray-300 text-gray-500"
//                       : "bg-red-500 text-white"
//                   } px-4 py-2 rounded`}
//                   onClick={() => handleCancel(camp._id)}
//                   disabled={camp.paymentStatus === "paid" && camp.confirmationStatus === "Confirmed"}
//                 >
//                   Cancel
//                 </button>
//               </td>
//               <td className="border border-gray-400 px-4 py-2">
//                 {camp.paymentStatus === "paid" && camp.confirmationStatus === "Confirmed" && (
//                   <button
//                     className="bg-yellow-500 text-white px-4 py-2 rounded"
//                     onClick={() => handleFeedback(camp._id)}
//                   >
//                     Provide Feedback
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Feedback Modal */}
//       {feedbackModal && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg">
//             <h2 className="text-xl mb-4">Feedback for Camp</h2>
//             <textarea className="w-full p-2 border border-gray-300 mb-4" placeholder="Enter your feedback"></textarea>
//             <div className="flex justify-between">
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//                 onClick={() => setFeedbackModal(null)}
//               >
//                 Close
//               </button>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Submit Feedback
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;


















import Swal from "sweetalert2";
import useRegister from "../../../hook/useRegister";
import useAxiosRegister from "../../../hook/useAxiosRegister";
import { useState } from "react";

const Register = () => {
  const [register, loading, refetch] = useRegister();
  const axiosRegister = useAxiosRegister();
  const [feedbackModal, setFeedbackModal] = useState(null);  // For Feedback Modal

  const handleConfirm = (campId) => {
    console.log(`Confirming camp with ID: ${campId}`);
    // Your confirmation logic here
    // Update the confirmation status here
    axiosRegister
      .patch(`/registerCamps/confirm/${campId}`)
      .then(() => {
        refetch();
        Swal.fire({
          title: "Confirmed",
          text: "Camp has been confirmed.",
          icon: "success",
        });
      });
  };

  const handleCancel = (id) => {
    console.log(`Cancelling registration for camp with ID: ${id}`);
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
            refetch();  // Refetch to update the list
            Swal.fire({
              title: "Cancelled!",
              text: "Your registration has been cancelled.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePay = (campId) => {
    console.log(`Paying for camp with ID: ${campId}`);
    // Payment logic (Stripe Integration)
    // Assume payment is successful here
    axiosRegister
      .patch(`/registerCamps/pay/${campId}`, { paymentStatus: "paid" })
      .then((response) => {
        refetch();
        Swal.fire({
          title: "Payment Successful",
          text: `Transaction ID: ${response.data.transactionId}`,
          icon: "success",
        });
      });
  };

  const handleFeedback = (campId) => {
    // Show Feedback Modal
    setFeedbackModal(campId);
  };


  const totalFees = register.reduce((accumulator, currentFees) => {
    const fee = parseFloat(String(currentFees.campFees).trim().replace("$", ""));
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
            <th className="border border-gray-400 px-4 py-2">Participant Name</th>
            <th className="border border-gray-400 px-4 py-2">Payment Status</th>
            <th className="border border-gray-400 px-4 py-2">Confirmation Status</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {register.map((camp, index) => (
            <tr key={camp._id} className="text-center">
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">{camp.campName}</td>
              <td className="border border-gray-400 px-4 py-2">{camp.campFees}</td>
              <td className="border border-gray-400 px-4 py-2">{camp.participantName}</td>
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
                  disabled={camp.paymentStatus !== "paid" || camp.confirmationStatus === "Confirmed"}
                  onClick={() => handleConfirm(camp._id)}
                >
                  {camp.confirmationStatus === "Confirmed" ? "Confirmed" : "Pending"}
                </button>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  className={`${
                    camp.paymentStatus === "paid"
                      ? "bg-gray-300 text-gray-500"
                      : "bg-green-500 text-white"
                  } px-4 py-2 rounded`}
                  onClick={() => handlePay(camp._id)}
                  disabled={camp.paymentStatus === "paid"}
                >
                  {camp.paymentStatus === "paid" ? "Paid" : "Pay"}
                </button>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  className={`${
                    camp.paymentStatus === "paid" && camp.confirmationStatus === "Confirmed"
                      ? "bg-gray-300 text-gray-500"
                      : "bg-red-500 text-white"
                  } px-4 py-2 rounded`}
                  onClick={() => handleCancel(camp._id)}
                  disabled={camp.paymentStatus === "paid" && camp.confirmationStatus === "Confirmed"}
                >
                  Cancel
                </button>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {camp.paymentStatus === "paid" && camp.confirmationStatus === "Confirmed" && (
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                    onClick={() => handleFeedback(camp._id)}
                  >
                    Provide Feedback
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Feedback Modal */}
      {feedbackModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">Feedback for Camp</h2>
            <textarea className="w-full p-2 border border-gray-300 mb-4" placeholder="Enter your feedback"></textarea>
            <div className="flex justify-between">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setFeedbackModal(null)}
              >
                Close
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
