import React from 'react';

const WhyChooseUs = () => {
    // Data for the section
    const features = [
        {
            icon: "⭐", // Replace with actual SVG icons if needed
            title: "Expert Guidance",
            description: "Our team of experts provides personalized advice tailored to your needs.",
        },
        {
            icon: "⚡",
            title: "Fast & Reliable",
            description: "We ensure quick responses and reliable services to save your time.",
        },
        {
            icon: "🔒",
            title: "Secure Platform",
            description: "Your data is protected with industry-leading security measures.",
        },
        {
            icon: "💰",
            title: "Affordable Pricing",
            description: "Enjoy high-quality services at competitive and transparent prices.",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 ">
            <h2 className="mb-8 text-4xl font-bold text-center text-[#336699]" >Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="text-center p-6 bg-white shadow-lg rounded-lg">
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;