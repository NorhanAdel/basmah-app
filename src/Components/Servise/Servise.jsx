import React from "react";
import IMG from "../../assets/2-–-Main.png";
import IMG2 from "../../assets/3-n1.png";
import IMG5 from "../../assets/4-–-Main.png";
import "./Servise.scss";
function Servise() {
  return (
    <div className="servise_page">
      <div className="servise_container">
        <div className="right">
          <div className="servise_item1">
            <div className="service_item orange">
              <h1 className="service_title">تصميم الهوية البصرية</h1>
              <p className="service_sub">
                نمارس فن تصميم الشعارات والهوية البصرية وندمج الجمال مع الأعمال.
                نحن نؤمن بأن التصميم الرقمي يشبه الرسم، باستثناء أن الطلاء لا
                يجف أبدًا، كما قال المخرج البريطاني نيفيل برودي.
              </p>
              <img src={IMG} alt="" />
            </div>
            <div className="service_item grey">
              <h1 className="service_title"> تصميم الموقع الالكتروني</h1>
              <p className="service_sub">
                نحن لا ننشئ لك مجرد موقع ويب.. نحن ننشئ لك موقعا يحقق أهدافك.
                موقع الانترنت هو أهم قاعدة لبناء نشاطك التجاري أو التسويقي. نصمم
                لك موقعك برؤية فنية وتقنية احترافية جذابة متناسقة مع الهوية
                البصرية
              </p>
              <img src={IMG2} alt="" />
            </div>
          </div>

          <div className="servise_item1">
            <div className="service_item grey">
              <h1 className="service_title">تصميم الهوية البصرية</h1>
              <p className="service_sub">
                نمارس فن تصميم الشعارات والهوية البصرية وندمج الجمال مع الأعمال.
                نحن نؤمن بأن التصميم الرقمي يشبه الرسم، باستثناء أن الطلاء لا
                يجف أبدًا، كما قال المخرج البريطاني نيفيل برودي.
              </p>
              <img src={IMG} alt="" />
            </div>
            <div className="service_item orange">
              <h1 className="service_title"> تصميم الموقع الالكتروني</h1>
              <p className="service_sub">
                نحن لا ننشئ لك مجرد موقع ويب.. نحن ننشئ لك موقعا يحقق أهدافك.
                موقع الانترنت هو أهم قاعدة لبناء نشاطك التجاري أو التسويقي. نصمم
                لك موقعك برؤية فنية وتقنية احترافية جذابة متناسقة مع الهوية
                البصرية
              </p>
              <img src={IMG2} alt="" />
            </div>
          </div>
        </div>
        <div className="left">
          <div className="service_left_item">
            <h1 className="lfet_service_title">إدارة حسابات التواصل</h1>
            <p className="left_service_sub">
              المحتوى هو الشرارة.. وسائل التواصل الإجتماعي هي البنزين. هكذا عبر
              الكاتب الأمريكي في مجال التأثير والإقناع Jay Baer عن قوة تأثير
              السوشيال ميديا في العصر الراهن.
            </p>
            <p className="left_service_sub">
              على عكس ما يعتقد كثير من الناس، فإن إدارة حسابات وسائل التواصل
              ليست مهمة بسيطة تشمل فقط نشر البوستات ومقاطع الفيديو. هي أهم من
              ذلك بكثير. نحن نقدم لك خدمات إدارة وتنشيط حسابات التواصل الإجتماعي
              من أجل بناء جمهور متفاعل لزيادة الوعي بعلامتك التجارية.
            </p>
            <img src={IMG5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servise;
