import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <Link to="/">Swarvo</Link>
            <div className="links">
                <Link to="/Games" className="preview">Nos Jeux</Link>
                <Link to="/ComingSoon" className="preview">À venir</Link>
                <Link to="/AboutUs" className="preview">À propos de nous</Link>
                <Link to="/ContactUs" className="preview">Contactez nous</Link>
            </div>
        </nav>

    );
}
 
export default Navbar;