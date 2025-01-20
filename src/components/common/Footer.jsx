import logo from "../../assets/logo2.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';  // Social icons

const Footer = () => {
  return (
    <footer className="bg-[#336699] text-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-8">
          {/* Logo aligned to the left on desktop, center on mobile */}
          <img src={logo} alt="Logo" className="h-18 w-40 mb-4 md:mb-0 md:mr-16" />
          
          {/* Footer navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div>
              <h6 className="text-lg font-semibold mb-4">Services</h6>
              <a className="block text-white">Branding</a>
              <a className="block text-white">Design</a>
              <a className="block text-white">Marketing</a>
              <a className="block text-white">Advertisement</a>
            </div>

            <div>
              <h6 className="text-lg font-semibold mb-4">Company</h6>
              <a className="block text-white">About us</a>
              <a className="block text-white">Contact</a>
              <a className="block text-white">Jobs</a>
              <a className="block text-white">Press kit</a>
            </div>

            <div>
              <h6 className="text-lg font-semibold mb-4">Legal</h6>
              <a className="block text-white">Terms of use</a>
              <a className="block text-white">Privacy policy</a>
              <a className="block text-white">Cookie policy</a>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
        
        <div className="mt-8 text-center text-white">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
