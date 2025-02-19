import React from 'react';

const ContactAndSupport = () => {
  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#336699] mb-8">Contact & Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Emergency Contact */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-5xl text-blue-500 mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-2">Emergency Contact</h3>
            <p className="text-gray-700">Call us anytime:</p>
            <p className="text-lg font-medium text-green-600">+123 456 7890</p>
          </div>

          {/* Email Support */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-5xl text-red-500 mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-gray-700">Send us an email:</p>
            <p className="text-lg font-medium text-blue-600">support@example.com</p>
          </div>

          {/* Live Chat */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-5xl text-yellow-500 mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-700">Chat with us now:</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 mt-2">
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAndSupport;