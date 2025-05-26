import Header from "../ui/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../ui/Footer/Footer.tsx";

function Main() {
    return (
        <>
            <Header/>
            <div className="mt-5"></div>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Main;