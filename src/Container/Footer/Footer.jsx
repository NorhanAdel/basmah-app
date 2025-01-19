import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { BiLogoWhatsapp } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <h3>تواصل معنا</h3>
          <p>البريد الإلكتروني: basmah.website7@gmail.com</p>
          <p>الهاتف:  0549447953  </p>
          <p>العنوان:   المدينة المنورة</p>
        </div>

        <div className="social-links">
          <h3>تابعنا على</h3>
          <div className="icons">
            <a
              href="https://www.facebook.com/profile.php?id=61572193564480"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/bassm_a_social_media/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@basma2464?_t=ZS-8t6l8jnXQmY&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=966549447953&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024  . بصمة جميع الحقوق محفوظة </p>
      </div>
    </footer>
  );
};

export default Footer;
