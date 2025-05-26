import './Footer.css'
function Footer() {
    return (
        <>
        <div className="container-fluid bg-primary">
            <div className="container-sm text-white pt-5 d-flex justify-content-between flex-wrap ">
                <div className="footer-item w-25">
                    <h5>EventSpot</h5>
                    <p >Your one-stop destination for discovering and booking the best events in your city</p>
                </div>
                <div className="footer-item d-flex flex-column">
                    <h5>Quick Links</h5>
                    <a>Home</a>
                    <a>Concerts</a>
                    <a>Sports</a>
                    <a>Theater</a>
                    <a>Movie</a>
                </div>
                <div className="footer-item d-flex flex-column">
                    <h5>Help & Support</h5>
                    <a>FAQs</a>
                    <a>Terms of Service</a>
                    <a>Privacy Policy</a>
                    <a>Support</a>
                </div>
                <div className="footer-item ">
                    <h5>Connect With Us</h5>
                    <i className="bi bi-facebook fs-3 pe-2"></i>
                    <i className="bi bi-instagram fs-3 pe-2"></i>
                    <i className="bi bi-twitter fs-3 pe-2"></i>
                    <i className="bi bi-youtube fs-3"></i>
                </div>
            </div>
            <div className="text-white text-center py-5">© 2025 EventSpot. All rights reserved</div>

        </div>
        </>
    );
}

export default Footer;