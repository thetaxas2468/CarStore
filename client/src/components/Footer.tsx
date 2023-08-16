import { Link } from "react-router-dom";
import "./static/Footer.css"

export const Footer = () => {




    return (
        <footer>
            <div className="container-fluid footer d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="pull-right list-unstyled">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/guide">Guide</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer d-flex justify-content-center">
                © Carstore {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer;
