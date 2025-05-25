import Header from "../ui/Header.tsx";
import {Outlet} from "react-router-dom";

function Main() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default Main;