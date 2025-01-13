import React from "react";
import "./About.scss";
import IMG from "../../assets/5618169.jpg";
import { Link } from "react-router-dom";
import Servise from "../../Components/Servise/Servise";

const servicesData = [
  {
    id:1,
    title: "إدارة حسابات السوشيال ميديا",
    description: "نساعدك على إدارة حساباتك باحترافية وتعزيز تواجدك الرقمي.",
  },
  {
  id:2,
    title: "كتابة محتوى إبداعي",
    description: "نصنع محتوى جذاب ومبتكر يعكس هوية علامتك التجارية.",
  },
 {
  id:3,
    title: "تصميم جرافيك احترافي",
    description: "تصاميم عصرية ومميزة لتمثيل علامتك التجارية بأفضل صورة.",
  },
  {
     id:4,
    title: "تصوير وإنتاج فيديوهات",
    description: "إنتاج فيديوهات إبداعية تعبر عن رسالتك وتلفت الأنظار.",
  },
  {id:5,
    title: "إدارة حملات إعلانية ممولة",
    description: "إعلانات ممولة مدروسة لتحقيق أهدافك التسويقية.",
  },
   {
    id:6,
    title: "زيادة مشاهدات تيك توك",
    description: "نعزز مشاهدات محتواك على تيك توك لجذب المزيد من الجمهور.",
  },
  {
    id:7,
    title: "دراسة المنافسين ووضع خطط تسويقية",
    description: "تحليل المنافسين وتصميم خطط تسويقية مبتكرة.",
  },
];
const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>من نحن</h1>
          <p>
            مرحبًا بكم في <span>بصمة</span>، شريكك المثالي في بناء حضور قوي
            على وسائل التواصل الاجتماعي. نحن نقدم حلولًا إبداعية تشمل إدارة
            الحسابات، كتابة المحتوى، تصميم الجرافيك، إنتاج الفيديوهات، والمزيد!
          </p>
          <p>
            دعنا نساعدك على التميز في العالم الرقمي من خلال خطط مصممة خصيصًا
            لنجاح أعمالك.
          </p>
        </div>
        <div className="about-image">
          <img src={IMG} alt="مديانو" />
        </div>
      </div>
       <div className="services">
        <h2>خدماتنا</h2>

<Servise/>





        {/* <ul>
          {servicesData.map((service, index) => (
            <Link to={`/service/${service.id}`}>
              <li key={index}>{service.title}</li>
            </Link>
          ))}
        </ul>  */}
    </div>
   
    </section>
  );
};

export default About;
