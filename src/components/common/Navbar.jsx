import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { RiMenuFoldFill } from "react-icons/ri";
import logo from "../../assets/logo2.png";
import useAuth from "../../hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Handle Logout
  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logOut()
        .then(() => {
          console.log("Logged out successfully!");
          setIsProfileMenuOpen(false);
        })
        .catch((error) => {
          console.error(error);
          alert("Logout failed. Please try again.");
        });
    }
  };

  // Close profile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isProfileMenuOpen &&
        !event.target.closest(".profile-menu-container")
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileMenuOpen]);

  // Navigation Links
  const links = (
    <>
      <li className="text-lg font-medium transition duration-300 hover:text-lime-400">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          Home
        </Link>
      </li>
      <li className="text-lg font-medium transition duration-300 hover:text-lime-400">
        <Link to="/availableCamps" onClick={() => setIsMobileMenuOpen(false)}>
          Available Camps
        </Link>
      </li>
      <li className="text-lg font-medium transition duration-300 hover:text-lime-400">
        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
          About Us
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-[#336699] text-white shadow-md sticky top-0 z-50">
      {/* Mobile Menu Toggle */}
      <div className="flex items-center justify-between px-4 lg:hidden">
        <button
          className="p-2 rounded-full hover:bg-[#2a5278] transition duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <IoIosCloseCircle className="h-7 w-7 text-red-500" />
          ) : (
            <RiMenuFoldFill className="h-7 w-7 text-white" />
          )}
        </button>
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MediCare Camp Logo"
            className="h-12 transition duration-300 hover:scale-105"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center px-8 py-4">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MediCare Camp Logo"
            className="h-12 transition duration-300 hover:scale-105"
          />
        </Link>
        <ul className="flex space-x-6 text-lg font-medium">{links}</ul>
        <div className="relative profile-menu-container">
          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="User Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white hover:border-lime-400 transition duration-300"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              />
              {isProfileMenuOpen && (
                <div className="absolute right-0 md:mt-52 w-48 bg-[#336699] shadow-lg rounded-lg overflow-hidden z-10">
                  <div className="p-3 text-white border-b border-lime-400">
                    {user.displayName || "Guest"}
                  </div>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-white hover:bg-[#075243] transition duration-300"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#075243] transition duration-300"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 bg-[#d2e4f7] hover:bg-[#bcd9f2] font-bold rounded-lg text-lime-700 hover:text-lime-900 transition duration-300"
            >
              <span>Join Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#336699] py-4 px-6 space-y-4">
          <ul className="space-y-2 text-lg font-medium ">{links}</ul>
          {user ? (
            <div className="flex flex-col space-y-2">
              <Link
                to="/dashboard"
                className="px-4 py-2 bg-[#075243] text-white rounded-lg hover:bg-[#054135] transition duration-300"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 bg-[#d2e4f7] hover:bg-[#bcd9f2] font-bold rounded-lg text-lime-700 hover:text-lime-900 transition duration-300"
            >
              <span>Join Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;