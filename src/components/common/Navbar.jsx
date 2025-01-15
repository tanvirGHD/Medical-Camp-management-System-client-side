import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
    <div className="navbar bg-base-100">
      {/* Logo and Website Name */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
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
                className="absolute right-0 mt-2 w-48 bg-[#107964] shadow-lg rounded-lg"
              >
                {/* User Name */}
                <div className="p-3 text-white border-b">
                  {user.displayName || "User"}
                </div>

                {/* Dashboard Link */}
                <Link
                  to="/dashboard"
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
