import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 min-h-screen bg-blue-300 p-4">
                <h2 className="text-lg font-bold mb-4">Organizer Dashboard</h2>
                <ul className="menu">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-white" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/organizer-profile" className={({ isActive }) => isActive ? "font-bold text-white" : ""}>
                            Organizer Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/add-camp" className={({ isActive }) => isActive ? "font-bold text-white" : ""}>
                            Add A Camp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manage-camps" className={({ isActive }) => isActive ? "font-bold text-white" : ""}>
                            Manage Camps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manage-registered-camps" className={({ isActive }) => isActive ? "font-bold text-white" : ""}>
                            Manage Registered Camps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/analytics" className={({ isActive }) => isActive ? "font-bold text-white" : ""}>
                            Analytics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/participant-profile" className={({ isActive }) => isActive ? "font-bold text-white" : ""}>
                            Participant Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/register" className={({ isActive }) => isActive ? "font-bold text-white" : ""}>
                            Registered Camps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment-history" className={({ isActive }) => isActive ? "font-bold text-white" : ""}>
                            Payment History
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
