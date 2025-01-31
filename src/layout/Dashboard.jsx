import { NavLink, Outlet } from "react-router-dom";
import useOrganizer from "../hook/useOrganizer";
import { useState } from "react";
import {
  FaUsers,
  FaUserCircle,
  FaWindowClose,
  FaBars,
  FaCampground,
  FaList,
  FaHome,
} from "react-icons/fa"; // React Icons

const Dashboard = () => {
  const [isOrganizer] = useOrganizer();
  const [isOpen, setIsOpen] = useState(false); // Drawer visibility state

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md m-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaWindowClose /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 sm:w-80 h-full bg-[#336699] text-white p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:block`}
      >
        {/* Close Icon */}
        <div>
          <button
            className="lg:hidden absolute top-4 right-4 mt-2 text-center text-white hover:text-red-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
            aria-label="Close Sidebar"
          >
            <FaWindowClose />
          </button>
        </div>

        {/* Dashboard Title */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            {isOrganizer ? "Organizer Dashboard" : "Participant Dashboard"}
          </h2>
        </div>

        {/* Navigation Links */}
        <ul className="menu space-y-2">
          {isOrganizer ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white flex items-center"
                      : "hover:text-blue-700 transition-colors flex items-center"
                  }
                >
                  <FaUsers className="mr-2" /> All Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/organizerProfile"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white flex items-center"
                      : "hover:text-blue-700 transition-colors flex items-center"
                  }
                >
                  <FaUserCircle className="mr-2" /> Organizer Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addCamp"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white flex items-center"
                      : "hover:text-blue-700 transition-colors flex items-center"
                  }
                >
                  <FaCampground className="mr-2" /> Add A Camp
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageCamps"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white flex items-center"
                      : "hover:text-blue-700 transition-colors flex items-center"
                  }
                >
                  <FaList className="mr-2" /> Manage Camps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageRegister"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white flex items-center"
                      : "hover:text-blue-700 transition-colors flex items-center"
                  }
                >
                  <FaList className="mr-2" /> Manage Registered Camps
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/participantAnalytics"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white flex items-center"
                      : "hover:text-blue-700 transition-colors flex items-center"
                  }
                >
                  <FaList className="mr-2" /> Analytics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/participantProfile"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white flex items-center"
                      : "hover:text-blue-700 transition-colors flex items-center"
                  }
                >
                  <FaUserCircle className="mr-2" /> Participant Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/register"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white flex items-center"
                      : "hover:text-blue-700 transition-colors flex items-center"
                  }
                >
                  <FaCampground className="mr-2" /> Registered Camps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white flex items-center"
                      : "hover:text-blue-700 transition-colors flex items-center"
                  }
                >
                  <FaList className="mr-2" /> Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* Common Links */}
          <div className="divider border-t border-gray-300 my-4"></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-white flex items-center"
                  : "hover:text-blue-700 transition-colors flex items-center"
              }
            >
              <FaHome className="mr-2" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/availableCamps"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-white flex items-center"
                  : "hover:text-blue-700 transition-colors flex items-center"
              }
            >
              <FaCampground className="mr-2" /> Available Camps
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-2 md:p-6 overflow-auto bg-white rounded-lg shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;