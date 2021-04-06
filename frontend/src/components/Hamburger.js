import { useState } from "react";
import { Link } from "react-router-dom";
import './Hamburger.css'


const Hamburger = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            <img onClick={handleToggle} className="fas fa-bars" src="../navicon.svg" alt="cortado"></img>
            <nav className={`nav ${isActive ? "nav" : "navv"}`}>
                <nav id="navigation" className="nav">
                    <ul id="nav-menu" className="nav__menu">
                        <Link to="/menu" className="nav__menu--list">MENY<hr className="nav-hr"></hr></Link>
                        <Link to="/about" className="nav__menu--list">Vårt Kaffe<hr className="nav-hr"></hr></Link>
                        <Link to="/profile" className="nav__menu--list">Min profil<hr className="nav-hr"></hr></Link>
                        <Link to="/status" className="nav__menu--list">Orderstatus</Link>

                    </ul>
                </nav>
            </nav>

        </>
    );
}
export default Hamburger;