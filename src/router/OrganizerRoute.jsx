import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useOrganizer from "../hook/useOrganizer";


const OrganizerRoute = ({children}) => {
    const [user, loading] = useAuth();
    const [isOrganizer, isOrganizerLoading] = useOrganizer();
    const location = useLocation()
    if(loading || isOrganizerLoading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user && isOrganizer) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default OrganizerRoute;