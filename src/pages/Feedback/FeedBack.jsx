import React from "react";

const FeedBack = () => {
  return (
    <div className="container mx-auto p-8 ">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-[#336699]">
        Patient Registration Feedback
      </h1>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative group">
          {/* Decorative Quote Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-4 right-4 h-8 w-8 text-gray-300 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <p className="font-bold text-blue-600">Md. Abid Bhuyan</p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">
            Easy Registration Process
          </h2>
          <p className="mt-4 text-gray-600">
            The patient reported that the registration process was
            straightforward and user-friendly. They highlighted the clarity of
            the forms and appreciated the ability to input medical history
            seamlessly. The overall experience was positive, and they felt
            confident about the healthcare service from the start.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative group">
          {/* Decorative Quote Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-4 right-4 h-8 w-8 text-gray-300 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <p className="font-bold text-blue-600">Md. Tanvir Ahammad</p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">
            Suggestions for Improvement
          </h2>
          <p className="mt-4 text-gray-600">
            While the patient found the registration system easy to use, they
            suggested adding a section for uploading medical documents directly
            to the form. This would save time and ensure that all relevant
            health information is accessible before appointments.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative group">
          {/* Decorative Quote Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-4 right-4 h-8 w-8 text-gray-300 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <p className="font-bold text-blue-600">Md. Rakib Hossain</p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">
            Technical Issues Encountered
          </h2>
          <p className="mt-4 text-gray-600">
            A patient experienced some minor technical issues with the website's
            registration form, such as occasional page freezes and difficulty
            uploading documents. They recommended enhancing the site's backend
            performance to ensure smoother registration and document submission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;