
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle Logout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully!");
        setIsDropdownOpen(false); // Close dropdown after logging out
      })
      .catch((error) => console.error(error));
  };

  // Toggle Dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Navigation Links
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/availableCamps">Available Camps</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 z-50 relative">
      {/* Logo and Website Name */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content absolute bg-base-100 rounded-box z-[1000] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-xl">MediCare Camp</a>
      </div>

      {/* Centered Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Profile Picture or Join Us Button */}
      <div className="navbar-end">
        {user ? (
          <div className="relative">
            {/* Profile Picture */}
            <img
              src={user.photoURL || "/assets/default-avatar.png"}
              alt="User Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                role="menu"
                aria-label="User Menu"
                className="absolute right-0 mt-2 w-48 bg-[#107964] shadow-lg rounded-lg z-[1000]"
              >
                {/* User Name */}
                <div className="p-3 text-white border-b">
                  {user.displayName || "User"}
                </div>

                {/* Dashboard Link */}
                <Link
                  to="/dashboard/register"
                  className="block px-4 py-2 text-white hover:bg-[#075243]"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Dashboard
                </Link>

                {/* Logout Button */}
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
          <Link to="/login" className="btn">
            Join Us
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
