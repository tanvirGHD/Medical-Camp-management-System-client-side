import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://i.ibb.co.com/rRyVCBvV/serious-man-formal-jacket-tie-standing-camera.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Chief Medical Officer",
      image: "https://i.ibb.co.com/wqqTj6B/man-isolated-showing-facial-emotions.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "Lead Developer",
      image: "https://i.ibb.co.com/C5R3BjMT/fashion-handsome-man-close-up.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Emily Brown",
      avatar: "https://i.ibb.co.com/rRyVCBvV/serious-man-formal-jacket-tie-standing-camera.jpg",
      quote:
        "This platform has transformed the way we organize healthcare camps!",
    },
    {
      id: 2,
      name: "Michael Lee",
      avatar: "https://i.ibb.co.com/wqqTj6B/man-isolated-showing-facial-emotions.jpg",
      quote:
        "The team is professional, and their services are top-notch.",
    },
    {
      id: 3,
      name: "Sophia Green",
      avatar: "https://i.ibb.co.com/C5R3BjMT/fashion-handsome-man-close-up.jpg",
      quote:
        "Highly recommend this initiative to anyone looking for impactful healthcare solutions.",
    },
  ];

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = (index) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 },
    },
  });

  return (
    <div>
      {/* Mission & Vision Section */}
      <motion.section
        className="py-16 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-[#336699] mb-8"
            variants={sectionVariants}
          >
            Our Mission & Vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div variants={sectionVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide accessible and affordable healthcare services to underserved communities through organized camps and outreach programs.
              </p>
            </motion.div>
            {/* Vision */}
            <motion.div variants={sectionVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A world where everyone has access to quality healthcare, regardless of their socioeconomic status.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Members Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-[#336699] mb-8"
            variants={sectionVariants}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={cardVariants(index)}
                initial="hidden"
                whileInView="visible"
                className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-16 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-[#336699] mb-8"
            variants={sectionVariants}
          >
            What People Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants(index)}
                initial="hidden"
                whileInView="visible"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-[#336699] mb-8"
            variants={sectionVariants}
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <motion.div variants={sectionVariants} className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-700">info@healthcarecamps.com</p>
            </motion.div>
            {/* Phone */}
            <motion.div variants={sectionVariants} className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-700">+1 (234) 567-8900</p>
            </motion.div>
            {/* Location */}
            <motion.div variants={sectionVariants} className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-700">123 Healthcare Lane, City, Country</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Google Map Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-[#336699] mb-8"
            variants={sectionVariants}
          >
            Find Us on Google Maps
          </motion.h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.708118836156!2d-73.99412938459855!3d40.75004967932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b8fbef1f%3A0x8fd9821a93b8e78e!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1697209250000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;