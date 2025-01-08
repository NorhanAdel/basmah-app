import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import emailjs from "emailjs-com";
import "./Contact.scss";
import IMG from "../../assets/Social Media Campaign [2024 Exquisite Guide].jpg";
import Herobg from "../../Components/Herobg/Herobg";
import Footer from "../../Container/Footer/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Your service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Your template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID // User ID from .env
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <div>
      <Herobg img={IMG} text="تواصل معانا" />
      <div className="contact-page">
        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt />
            <span>01061258923</span>
          </div>
          <div className="info-item">
            <IoLogoWhatsapp />
            <span>01061258923</span>
          </div>
          <div className="info-item">
            <MdOutlineMailOutline />
            <span>mdyanw.marketing@gmail.com</span>
          </div>
        </div>
        <div className="contact-body">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="الاسم"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
                required
              />
              <div className="phone-group">
                <select disabled>
                  <option value="20+">+20</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="رقم الهاتف"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="الرسالة"
                required
              ></textarea>
              <button type="submit">إرسال</button>
            </form>
            {isSent && <p>تم إرسال رسالتك بنجاح!</p>}
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              title="Google Maps"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
