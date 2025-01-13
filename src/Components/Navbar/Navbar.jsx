import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { navitem } from "../../constant/nav";
import "./Navbar.scss";
import { BiLogoWhatsapp } from "react-icons/bi";

const Navbar = () => {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1> بصمه</h1>
        <span>للدعايه والاعلان</span>
      </div>

      <div>
        <ul className="nav-links" ref={navRef}>
          {navitem.map((item, i) => {
            return (
              <li key={i}>
                <NavLink to={item.path}>{item.link}</NavLink>
              </li>
            );
          })}

          <a
            href="https://api.whatsapp.com/send/?phone=966549447953&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="contact_whats"
          >
            <BiLogoWhatsapp />
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNav}>
            X
          </button>
        </ul>
        <button className="nav-btn" onClick={showNav}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
