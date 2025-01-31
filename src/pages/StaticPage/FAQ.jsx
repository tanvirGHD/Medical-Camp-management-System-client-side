import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "What is the purpose of this platform?",
      answer:
        "Our platform is designed to bridge the gap between healthcare providers and underserved communities. We organize camps to provide free or affordable medical services, health education, and preventive care. Our goal is to ensure everyone has access to quality healthcare regardless of their location or financial status.",
    },
    {
      id: 2,
      question: "How can I register for a camp?",
      answer:
        "To register for a camp, follow these steps:\n" +
        "- Visit the 'Available Camps' section on our website.\n" +
        "- Browse through the list of upcoming camps and select one that suits your needs.\n" +
        "- Click the 'Join Now' button and fill out the registration form.\n" +
        "- Once registered, you'll receive a confirmation email with further instructions.",
    },
    {
      id: 3,
      question: "Are the camps free of charge?",
      answer:
        "The cost of camps varies depending on the type of services provided:\n" +
        "- Some camps are completely free and funded by donations.\n" +
        "- Others may have a nominal fee to cover operational costs.\n" +
        "- Details about fees and payment options are available in the camp description.",
    },
    {
      id: 4,
      question: "Can I volunteer as a healthcare professional?",
      answer:
        "Absolutely! We welcome healthcare professionals to join our mission. Here's how you can volunteer:\n" +
        "- Navigate to the 'Volunteer' section on our website.\n" +
        "- Fill out the application form with your qualifications and availability.\n" +
        "- Our team will review your application and contact you for further steps.",
    },
    {
      id: 5,
      question: "How do I update my profile information?",
      answer:
        "Updating your profile is simple:\n" +
        "- Log in to your account and go to the 'Dashboard'.\n" +
        "- Click on 'Profile' in the sidebar menu.\n" +
        "- Edit your details (e.g., name, email, phone number) and save the changes.\n" +
        "- Your updated information will be reflected immediately.",
    },
  ];

  return (
    <section className="py-12">
      {/* FAQ Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#336699]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      {/* Question */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.717-1.01.758-.132.16-.38.28-.64.33a2.5 2.5 0 01-2.25-2.5c0-.83.67-1.5 1.5-1.5z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-purple-500 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Answer */}
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 whitespace-pre-line">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;