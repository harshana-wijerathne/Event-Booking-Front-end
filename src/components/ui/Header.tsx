function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary py-0">
            <div className="container-fluid bg-primary px-5 py-2">
                <a className="navbar-brand text-white d-flex gap-3 align-items-center " href="#">
                    <i className="bi bi-stickies-fill bi-ticket-perforated fs-2 "></i>
                    <h3 className="fw-bold">Event Spot</h3>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Concerts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Theater</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Movie</a>
                        </li>
                    </ul>
                    <form className="d-flex gap-2 ">
                        <button className="btn text-white" type="submit">Sign in</button>
                        <button className="btn btn-success text-white" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;