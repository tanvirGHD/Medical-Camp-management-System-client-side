import React from 'react';

const FeedBack = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center text-[#336699] mb-12">Patient Registration Feedback</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <p className='font-bold'>Md. Abid Bhuyan</p>
                    <h2 className="text-2xl font-semibold text-gray-800">Easy Registration Process</h2>
                    <p className="mt-4 text-gray-600">The patient reported that the registration process was straightforward and user-friendly. They highlighted the clarity of the forms and appreciated the ability to input medical history seamlessly. The overall experience was positive, and they felt confident about the healthcare service from the start.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className='font-bold'>Md. Tanvir Ahammad</p>
                    <h2 className="text-2xl font-semibold text-gray-800">Suggestions for Improvement</h2>
                    <p className="mt-4 text-gray-600">While the patient found the registration system easy to use, they suggested adding a section for uploading medical documents directly to the form. This would save time and ensure that all relevant health information is accessible before appointments.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className='font-bold'>Md. Rakib Hossain</p>
                    <h2 className="text-2xl font-semibold text-gray-800">Technical Issues Encountered</h2>
                    <p className="mt-4 text-gray-600">A patient experienced some minor technical issues with the website's registration form, such as occasional page freezes and difficulty uploading documents. They recommended enhancing the site's backend performance to ensure smoother registration and document submission.</p>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;
