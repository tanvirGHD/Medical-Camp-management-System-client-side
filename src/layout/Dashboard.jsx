import { NavLink, Outlet } from "react-router-dom";
import useOrganizer from "../hook/useOrganizer";
import { useState } from "react";
import { FaUsers, FaUserCircle, FaWindowClose, FaBars, FaCampground, FaList, FaHome } from 'react-icons/fa'; // React Icons

const Dashboard = () => {
  const [isOrganizer] = useOrganizer();
  const [isOpen, setIsOpen] = useState(false); // Drawer visibility state

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden bg-blue-500 text-white py-2 px-4 rounded-md m-4"
        onClick={() => setIsOpen(!isOpen)}
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
            className="lg:hidden absolute top-4 right-4 mt-2 text-center"
            onClick={() => setIsOpen(false)}
          >
            <FaWindowClose />
          </button>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Organizer Dashboard</h2>
        </div>
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
          <div className="divider"></div>
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
      <div className="flex-1 p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
