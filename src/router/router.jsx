import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import Login from "../pages/Entry/Login";
import SignUp from "../pages/Entry/SignUp";
import JoinCamp from "../pages/joinCamp/JoinCamp";
import Banner from "../components/Banner.jsx/Banner/Banner";
import PopularCamp from "../components/Home/PopularCamp";
import Dashboard from "../layout/Dashboard";
import Register from "../pages/Dashboard/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ManageRegister from "../pages/Dashboard/manageRegister/ManageRegister";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import PopularDetails from "../components/Home/PopularDetails";
import CampDetails from "../pages/CapmDetails/CampDetails";
import AddCamp from "../pages/Dashboard/AddCamps/AddCamp";
import OrganizerRoute from "./OrganizerRoute";
import ManageCamps from "../pages/Dashboard/ManageCamps/ManageCamps";
import UpdateCamp from "../pages/Dashboard/UpdateCamp/UpdateCamp";
import ParticipantProfile from "../pages/Dashboard/Participant/participantProfile";
import ParticipantAnalytics from "../pages/Dashboard/Participant/ParticipantAnalytics";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import Organizer from "../pages/Organizer/Organizer";
import UpdateOrganizer from "../pages/Dashboard/UpdateCamp/UpdateOrganizer";
import FeedBack from "../pages/Feedback/FeedBack";
import AboutUs from "../pages/StaticPage/AboutUs";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: 'availableCamps',
                element: <AvailableCamps></AvailableCamps>
            },
            {
                path: 'feedback',
                element: <FeedBack></FeedBack>
            },
            {
                path: 'campDetails/:id',
                element: <CampDetails></CampDetails>,
                loader: ({params}) => fetch(`https://y-omega-ten.vercel.app/camps/${params.id}`)
            },
            {
                path: 'popularDetails/:id',
                element: <PopularDetails></PopularDetails>,
                loader: ({params}) => fetch(`https://y-omega-ten.vercel.app/registerCamps/${params.id}`)
            },
            {
                path: 'joinCamp',
                element: <JoinCamp></JoinCamp>
            },
            {
                path: 'popularCamp',
                element: <PopularCamp></PopularCamp>
            },
            {
                path: 'about',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'participantProfile',
                element: <ParticipantProfile></ParticipantProfile>
            },
            {
                path: 'participantAnalytics',
                element: <ParticipantAnalytics></ParticipantAnalytics>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            //admin routes
            {
                path: 'organizerProfile',
                element: <OrganizerRoute><Organizer></Organizer> </OrganizerRoute>
            },
            {
                path: 'updateOrganizer/:id',
                element: <OrganizerRoute><UpdateOrganizer></UpdateOrganizer> </OrganizerRoute>,
                loader: ({params}) => fetch(`https://y-omega-ten.vercel.app/users/${params.id}`)
            },
            {
                path: 'manageRegister',
                element: <OrganizerRoute><ManageRegister></ManageRegister></OrganizerRoute>
            },
            {
                path: 'users',
                element: <OrganizerRoute><AllUsers></AllUsers></OrganizerRoute>
            },
            {
                path: 'addCamp',
                element: <OrganizerRoute><AddCamp></AddCamp></OrganizerRoute>
            },
            {
                path: 'manageCamps',
                element: <OrganizerRoute><ManageCamps></ManageCamps></OrganizerRoute>
            },
            {
                path: 'updateCamp/:id',
                element: <OrganizerRoute><UpdateCamp></UpdateCamp></OrganizerRoute>,
                loader: ({params}) => fetch(`https://y-omega-ten.vercel.app/camps/${params.id}`)
            }
        ]
    }
  ]);

export default router;