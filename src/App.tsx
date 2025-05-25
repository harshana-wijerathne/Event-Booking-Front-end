import './App.css'
import {createBrowserRouter, redirect, RouteObject, RouterProvider} from "react-router";
import Home from "./pages/Home/Home.tsx";
import Header from "./components/ui/Header.tsx";

type Routes = RouteObject[];
const routes: Routes = [
    {
        index: true,
        loader: ()=>{
            return redirect('/main')
        }
    },
    {
        path: 'main',
        Component: Home
    }
];
const router = createBrowserRouter(routes);

function App() {
    <Header/>
    return(
    <>
        <Header/>
        <RouterProvider router={router} />
    </>)

}
export default App
