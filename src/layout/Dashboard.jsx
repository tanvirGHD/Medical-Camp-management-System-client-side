// import { NavLink, Outlet } from "react-router-dom";
// // import useRegister from "../hook/useRegister";
// import useOrganizer from "../hook/useOrganizer";

// const Dashboard = () => {
// //   const [register] = useRegister();

//   //TODO: get is admin value from the database
//   const [isOrganizer] = useOrganizer()

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-64 min-h-screen bg-blue-300 p-4">
//         <h2 className="text-lg font-bold mb-4">Organizer Dashboard</h2>
//         <ul className="menu">
//           {isOrganizer ? 
//             <>
//               <li>
//                 <NavLink
//                   to="/dashboard/users"
//                   className={({ isActive }) =>
//                     isActive ? "font-bold text-white" : ""
//                   }
//                 >
//                   Organizer Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/addCamp"
//                   className={({ isActive }) =>
//                     isActive ? "font-bold text-white" : ""
//                   }
//                 >
//                   Add A Camp
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/manageCamps"
//                   className={({ isActive }) =>
//                     isActive ? "font-bold text-white" : ""
//                   }
//                 >
//                   Manage Camps
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/manageRegister"
//                   className={({ isActive }) =>
//                     isActive ? "font-bold text-white" : ""
//                   }
//                 >
//                   Manage Registered Camps
//                 </NavLink>
//               </li>
//             </>
//            : 
//             <>
//               <li>
//                 <NavLink
//                   to="/dashboard/analytics"
//                   className={({ isActive }) =>
//                     isActive ? "font-bold text-white" : ""
//                   }
//                 >
//                   Analytics
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/participant-profile"
//                   className={({ isActive }) =>
//                     isActive ? "font-bold text-white" : ""
//                   }
//                 >
//                   Participant Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/register"
//                   className={({ isActive }) =>
//                     isActive ? "font-bold text-white" : ""
//                   }
//                 >
//                   Registered Camps
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/dashboard/payment-history"
//                   className={({ isActive }) =>
//                     isActive ? "font-bold text-white" : ""
//                   }
//                 >
//                   Payment History
//                 </NavLink>
//               </li>
//             </>
//           }

//           <div className="divider"></div>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "font-bold text-white" : ""
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/availableCamps"
//               className={({ isActive }) =>
//                 isActive ? "font-bold text-white" : ""
//               }
//             >
//               Available Camps
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 max-w-6xl mx-auto">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import { NavLink, Outlet } from "react-router-dom";
import useOrganizer from "../hook/useOrganizer";
import { useState } from "react";

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
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 sm:w-80 h-full bg-blue-300 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:block`}
      >
        {/* Close Icon */}
        <div>
        <button
          className="lg:hidden absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full"
          onClick={() => setIsOpen(false)}
        >
          X
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
                      ? "font-bold text-white"
                      : "hover:text-blue-700 transition-colors"
                  }
                >
                  Organizer Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addCamp"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white"
                      : "hover:text-blue-700 transition-colors"
                  }
                >
                  Add A Camp
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageCamps"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white"
                      : "hover:text-blue-700 transition-colors"
                  }
                >
                  Manage Camps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageRegister"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white"
                      : "hover:text-blue-700 transition-colors"
                  }
                >
                  Manage Registered Camps
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
                      ? "font-bold text-white"
                      : "hover:text-blue-700 transition-colors"
                  }
                >
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/participantProfile"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white"
                      : "hover:text-blue-700 transition-colors"
                  }
                >
                  Participant Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/register"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white"
                      : "hover:text-blue-700 transition-colors"
                  }
                >
                  Registered Camps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment-history"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-white"
                      : "hover:text-blue-700 transition-colors"
                  }
                >
                  Payment History
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
                  ? "font-bold text-white"
                  : "hover:text-blue-700 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/availableCamps"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-white"
                  : "hover:text-blue-700 transition-colors"
              }
            >
              Available Camps
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
