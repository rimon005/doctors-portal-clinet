import { createBrowserRouter } from "react-router-dom";
import DashBoardLayouts from "../../Layout/DashBoardLayouts";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appiontment/Appointment";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Register/Register";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement: <DisplayError />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/appointment',
                element: <Appointment />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/register' , 
                element: <Register />
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivetRoute><DashBoardLayouts /></PrivetRoute>,
        errorElement: <DisplayError />,
        children: [
            {
                path:'/dashboard', 
                element: <MyAppointment />
            },
            {
                path:'/dashboard/allUsers' , 
                element : <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path:'/dashboard/addDoctor' , 
                element : <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path:'/dashboard/manegeDoctors' , 
                element : <AdminRoute><ManageDoctors /></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id' , 
                element :<Payment />,
                loader: ({params}) => fetch(`https://final-project-server-ruddy.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])