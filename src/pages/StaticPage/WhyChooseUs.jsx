import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const features = [
        {
            icon: "⭐",
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

    const easingFunctions = [
        "easeInOut",
        "easeOut",
        "easeIn",
        "circInOut",
    ];

    const cardVariants = (index) => ({
        hidden: { 
            opacity: 0, 
            y: 50, 
            rotate: index % 2 === 0 ? -10 : 10, // Alternate rotation
            scale: 1 - (index * 0.1) // Scale down slightly for each card
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            rotate: 0, 
            scale: 1, 
            transition: { 
                duration: 0.6 + (index * 0.1), // Increase duration slightly for each card
                ease: easingFunctions[index % easingFunctions.length], // Cycle through easing functions
                delay: index * 0.2 // Unique delay based on index
            }
        },
    });

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="mb-8 text-4xl font-bold text-center text-[#336699]">Why Choose Us?</h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants(index)} // Pass the index to create unique animation
                        initial="hidden"
                        whileInView="visible"
                        className="text-center p-6 bg-white shadow-lg rounded-lg"
                    >
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default WhyChooseUs;