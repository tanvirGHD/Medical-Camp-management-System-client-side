import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import Login from "../pages/Entry/Login";
import SignUp from "../pages/Entry/SignUp";
import CampDetails from "../pages/capmDetails/CampDetails";
import JoinCamp from "../pages/joinCamp/JoinCamp";
import Banner from "../components/Banner.jsx/Banner/Banner";
import PopularCamp from "../components/Home/PopularCamp";
import Dashboard from "../layout/Dashboard";
import Register from "../pages/Dashboard/Register/Register";


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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
  ]);

export default router;