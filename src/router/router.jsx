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
                path: 'campDetails/:id',
                element: <CampDetails></CampDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/camps/${params.id}`)
            },
            {
                path: 'popularDetails/:id',
                element: <PopularDetails></PopularDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/registerCamps/${params.id}`)
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
            //admin routes
            {
                path: 'manageRegister',
                element: <ManageRegister></ManageRegister>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
  ]);

export default router;