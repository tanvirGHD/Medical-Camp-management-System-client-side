import { IoIosCloseCircle } from "react-icons/io";
import { RiMenuFoldFill } from "react-icons/ri";
import logo from "../../assets/logo2.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Handle Logout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully!");
        setIsProfileMenuOpen(false); // Close profile menu
      })
      .catch((error) => console.error(error));
  };

  // Navigation Links
  const links = (
    <>
      <li className="md:text-lg">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          Home
        </Link>
      </li>
      <li className="md:text-lg">
        <Link to="/availableCamps" onClick={() => setIsMobileMenuOpen(false)}>
          Available Camps
        </Link>
      </li>
    </>
  );

  return (
<div className="navbar bg-[#336699] text-white z-50 sticky top-0">
  {/* Logo and Mobile Menu Toggle */}
  <div className="navbar-start lg:hidden flex items-center">
    <button
      className="btn btn-ghost lg:hidden flex items-center"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? (
        <IoIosCloseCircle className="h-7 w-7" />
      ) : (
        <RiMenuFoldFill className="h-7 w-7" />
      )}
    </button>
  </div>

  {/* Logo Center on Mobile */}
  <div className="navbar-center lg:navbar-start">
    <Link to="/" className="flex items-center justify-center w-full lg:w-auto">
      <img
        src={logo}
        alt="MediCare Camp Logo"
        className="h-16 mx-auto lg:mx-0"
      />
    </Link>
  </div>

  {/* Dropdown Menu for Mobile */}
  {isMobileMenuOpen && (
    <div className="absolute top-full left-0 w-full bg-[#336699] z-[1000] shadow-md lg:hidden">
      <ul className="menu menu-compact p-4 text-white">
        {links}
      </ul>
    </div>
  )}

  {/* Desktop Links */}
  <div className="hidden lg:navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1">{links}</ul>
  </div>

  {/* Profile Picture or Join Us Button */}
  <div className="navbar-end">
    {user ? (
      <div className="relative">
        <img
          src={user.photoURL || "/assets/default-avatar.png"}
          alt="User Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        />
        {isProfileMenuOpen && (
          <div
            role="menu"
            aria-label="User Menu"
            className="absolute right-0 mt-2 w-48 bg-[#336699] shadow-lg rounded-lg z-[1000]"
          >
            <div className="p-3 text-white border-b">
              {user.displayName || "User"}
            </div>
            <Link
              to="/dashboard/register"
              className="block px-4 py-2 text-white hover:bg-[#075243]"
              onClick={() => setIsProfileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogOut}
              className="block w-full text-left px-4 py-2 text-white hover:bg-[#075243]"
            >
              LogOut
            </button>
          </div>
        )}
      </div>
    ) : (
      <Link
        to="/login"
        className="flex items-center gap-2 md:p-3 p-2 bg-[#d2e4f7] hover:bg-[#bcd9f2] font-bold rounded-lg text-lime-700 hover:text-lime-900 transition duration-300"
      >
        <span>Join Us</span>
        <img
          src="https://img.icons8.com/?size=100&id=11686&format=png&color=000000"
          alt="Join Icon"
          className="w-5 h-5"
        />
      </Link>
    )}
  </div>
</div>


  );
};

export default Navbar;
