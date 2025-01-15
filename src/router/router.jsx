import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import Login from "../pages/Entry/Login";
import SignUp from "../pages/Entry/SignUp";
import CampDetails from "../pages/capmDetails/CampDetails";
import JoinCamp from "../pages/joinCamp/JoinCamp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
  ]);

export default router;