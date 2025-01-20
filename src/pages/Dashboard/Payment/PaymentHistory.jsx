import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosRegister from "../../../hook/useAxiosRegister";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosRegister();

  const { data: payments = [], isLoading, error } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    }
  });

  // Loading and error handling
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-xl text-red-500">Error loading payment history.</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">Payment History</h1>
      {payments.length > 0 ? (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-6 border-b text-left font-semibold text-gray-700">Camp Name</th>
                <th className="py-3 px-6 border-b text-left font-semibold text-gray-700">Fees</th>
                <th className="py-3 px-6 border-b text-left font-semibold text-gray-700">Transaction ID</th>
                <th className="py-3 px-6 border-b text-left font-semibold text-gray-700">Date</th>
                <th className="py-3 px-6 border-b text-left font-semibold text-gray-700">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.transactionId} className="hover:bg-gray-50">
                  <td className="py-2 px-6 border-b"># {payment.campName}</td>
                  <td className="py-2 px-6 border-b">${payment.fees}</td>
                  <td className="py-2 px-6 border-b">{payment.transactionId}</td>
                  <td className="py-2 px-6 border-b">{new Date(payment.date).toLocaleString()}</td>
                  <td className="py-2 px-6 border-b">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        payment.status === "sucess"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-green-200 text-green-800"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">No payment history available.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
