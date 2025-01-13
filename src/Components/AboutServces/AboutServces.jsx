import React from "react";
import "./AboutServces.scss";
import IMG from "../../assets/AR-MEDIA-About-us.png";
import { goal } from "../../constant/gaol";
function AboutServces() {
  return (
    <div className="aboutService">
      <h1>مهمتنا</h1>
      <div className="service_goal">
        <div className="left_goal">
          <p>
            بصفتنا شركة سوشيال ميديا متخصصة، نساعدك على تطوير استراتيجيات تسويق
            رقمي فعالة وبناء تواجد قوي على وسائل التواصل الاجتماعي، مما يساهم في
            تعزيز علامتك التجارية وزيادة التفاعل مع عملائك. هدفنا هو تمكين
            الشركات من تحقيق النمو الرقمي وزيادة الوعي بخدماتها ومنتجاتها عبر
            الإنترنت.
          </p>
          <ul>
            {goal.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="right_goal">
          <img src={IMG} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutServces;
