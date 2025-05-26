import './App.css'
import {createBrowserRouter, redirect, RouteObject, RouterProvider} from "react-router-dom";
import Admin from "./pages/Admin/Admin.tsx";
import SeatSelection from "./pages/SeatSelection/SeatSelection.tsx";
import EventDetails from "./pages/EventDetails/EventDetails.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Checkout from "./pages/Checkout/Checkout.tsx";
import Main from "./components/main/Main.tsx";
import Home from "./pages/Home/Home.tsx";

type Routes = RouteObject[];
const routes: Routes = [
    {
        index: true,
        loader: () => {
            return redirect('')
        }
    },

    {
        path: '',
        Component: Main,
        children: [
            {
                index: true,
                loader: () => {
                    return redirect('home')
                }
            },
            {
                path: 'home',
                Component: Home
            },

            {
                path: 'checkout',
                Component: Checkout
            },
            {
                path: 'dashboard',
                Component: Dashboard
            },
            {
                path: 'eventDetails',
                Component: EventDetails
            },
            {
                path: 'seatSelection',
                Component: SeatSelection
            },
            {
                path: 'admin',
                Component: Admin
            }
        ]
    },

];
const router = createBrowserRouter(routes);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>)

}

export default App
