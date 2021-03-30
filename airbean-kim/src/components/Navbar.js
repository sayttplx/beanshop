import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 

        <nav className="navbar">

                <div className="menu-cart">
            <i className="fas fa-bars"></i>
            <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/menu">Meny</Link>
            <Link to="/about">Vårt Kaffe</Link>
            <Link to="/profile">Min Profil</Link>
            <Link to="/status">Orderstatus</Link>
            </div>


        </nav>
     );
}
 
export default Navbar;