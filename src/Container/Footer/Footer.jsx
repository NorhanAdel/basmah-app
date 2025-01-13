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
          <p>البريد الإلكتروني: mdyanw.marketing@gmail.com</p>
          <p>الهاتف: +20 10 61258923</p>
          <p>العنوان: القاهرة، مصر</p>
        </div>

        <div className="social-links">
          <h3>تابعنا على</h3>
          <div className="icons">
            <a
              href="https://www.facebook.com/profile.php?id=61569961888958"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/mdya_nw?fbclid=IwY2xjawHFhZhleHRuA2FlbQIxMAABHfL-H6XrnGY5OFcGKMKxKtdwHVzr9jzrlD4tQ4xUyLqaRaOA3HFGo_5Gkw_aem_Czhx27l5sj3_akr3brCanQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@mediano55?_t=8s6q3jCtuGg&_r=1"
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
        <p>© 2024 مديانو. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
