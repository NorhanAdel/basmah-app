import { useState } from "react";
import { Link } from "react-router-dom";
import { navitem } from "../../constant/nav";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        مد <span>يا</span> نو
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {navitem.map((item, i) => {
          return (
            <li key={i}>
              <Link to={item.path}>{item.link}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
