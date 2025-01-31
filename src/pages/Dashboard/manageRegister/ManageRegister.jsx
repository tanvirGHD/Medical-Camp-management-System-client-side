import Swal from "sweetalert2";
import useRegister from "../../../hook/useRegister";
import useAxiosRegister from "../../../hook/useAxiosRegister";

const ManageRegister = () => {
  const [register, loading, refetch] = useRegister();
  const axiosRegister = useAxiosRegister();

  // Handle Confirm Action
  const handleConfirm = (campId) => {
    console.log(`Confirming camp with ID: ${campId}`);
    // Your confirmation logic here
  };

  // Handle Cancel Action
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
            refetch(); // Refetch to update the list
            Swal.fire({
              title: "Cancelled!",
              text: "The registration has been cancelled.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // Handle Pay Action
  const handlePay = (campId) => {
    console.log(`Paying for camp with ID: ${campId}`);
    // Your payment logic here
  };

  // Calculate Total Fees
  const totalFees = register.reduce((accumulator, currentFees) => {
    const fee = parseFloat(currentFees.campFees); // Ensure it's a number
    return accumulator + (isNaN(fee) ? 0 : fee);
  }, 0);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Total Registration: {register.length}
        </h2>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
          Total Fees: ${totalFees.toFixed(2)}
        </h2>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          {/* Table Header */}
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-500  text-white">
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Camp Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Camp Fees
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Participant Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Confirmation Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {register.map((camp, index) => (
              <tr
                key={camp._id}
                className="hover:bg-gray-50 transition-colors duration-300"
              >
                {/* Index */}
                <td className="px-4 py-3 text-sm text-gray-700 text-center">
                  {index + 1}
                </td>

                {/* Camp Name */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  {camp.campName}
                </td>

                {/* Camp Fees */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  ${camp.campFees}
                </td>

                {/* Participant Name */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  {camp.participantName}
                </td>

                {/* Payment Status */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  <span
                    className={`${
                      camp.paymentStatus === "paid"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    } px-2 py-1 rounded-full text-xs font-medium`}
                  >
                    {camp.paymentStatus === "paid" ? "Paid" : "Unpaid"}
                  </span>
                </td>

                {/* Confirmation Status */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  <button
                    className={`${
                      camp.paymentStatus === "paid" &&
                      camp.confirmationStatus === "Pending"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } px-4 py-2 rounded-lg transition-all duration-300`}
                    disabled={
                      camp.paymentStatus !== "paid" ||
                      camp.confirmationStatus === "Confirmed"
                    }
                    onClick={() => handleConfirm(camp._id)}
                    aria-label={`Confirm registration for ${camp.participantName}`}
                  >
                    {camp.confirmationStatus === "Confirmed"
                      ? "Confirmed"
                      : "Pending"}
                  </button>
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-sm text-gray-700 flex justify-center gap-2">
                  {/* Cancel Button */}
                  <button
                    className={`${
                      camp.paymentStatus === "paid" &&
                      camp.confirmationStatus === "Confirmed"
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-red-500 text-white hover:bg-red-600"
                    } px-4 py-2 rounded-lg transition-all duration-300`}
                    onClick={() => handleCancel(camp._id)}
                    disabled={
                      camp.paymentStatus === "paid" &&
                      camp.confirmationStatus === "Confirmed"
                    }
                    aria-label={`Cancel registration for ${camp.participantName}`}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRegister;