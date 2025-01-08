import React from "react";
import Herobg from "../../Components/Herobg/Herobg";
import IMG from "../../assets/amanz-Pg_JRpQxCIg-unsplash.jpg";
import Footer from "../../Container/Footer/Footer";
import IMG1 from "../../assets/5618169.jpg";
import "./About.scss";
import AboutServces from "../../Components/AboutServces/AboutServces";

function About() {
  return (
    <div className="about_page">
      <Herobg img={IMG} text="عن الشركه" />
      <div className="about">
        <div className="about-container">
          <div className="about-text">
            <h1>من نحن</h1>
            <p>
              مرحبًا بكم في <span>مديانو</span>، شريكك المثالي في بناء حضور قوي
              على وسائل التواصل الاجتماعي. نحن نقدم حلولًا إبداعية تشمل إدارة
              الحسابات، كتابة المحتوى، تصميم الجرافيك، إنتاج الفيديوهات،
              والمزيد!
            </p>
            <p>
              دعنا نساعدك على التميز في العالم الرقمي من خلال خطط مصممة خصيصًا
              لنجاح أعمالك.
            </p>
          </div>
          <div className="about-image">
            <img src={IMG1} alt="مديانو" />
          </div>
        </div>
          </div>
          <AboutServces/>


      <Footer />
    </div>
  );
}

export default About;
