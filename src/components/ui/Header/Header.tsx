import './Header.css';
import {Link, NavLink} from "react-router-dom";


function Header() {
    return (
        <div className="container-fluid fixed-top">
            <div className="header-container container-md">
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary py-0">
                    <div className="container-fluid bg-primary py-2">
                        <Link className="navbar-brand text-white d-flex gap-3 align-items-center" to={'/main'}>
                            <i className="bi bi-stickies-fill bi-ticket-perforated fs-2 "></i>
                            <h3 className="fw-bold">Event Spot</h3>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white pb-0" aria-current="page" to="home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white pb-0" to="checkout">Concerts</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white pb-0" to="dashboard">Sports</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white pb-0" to="seatSelection">Theater</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white pb-0" to="admin">Movie</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex gap-2 ">
                                <button className="btn text-white" type="button">Sign in</button>
                                <button className="btn btn-success text-white" type="button">Register</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>


    );
}

export default Header;