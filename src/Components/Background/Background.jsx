import "./Background.scss";
import Video from "../../assets/تصميم بدون عنوان.mp4";
import IMG1 from "../../assets/mariia-shalabaieva-HBkpnDVc_Ic-unsplash.jpg";
import IMG2 from "../../assets/komarov-egor-ktrMrsbQMoE-unsplash.jpg";
import IMG3 from "../../assets/amanz-Pg_JRpQxCIg-unsplash.jpg";

const Background = ({ playstatus, herostatus }) => {
  if (playstatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
    );
  } else if (herostatus === 0) {
    return <img src={IMG1} alt="hero" className="background fade-in" />;
  } else if (herostatus === 1) {
    return <img src={IMG2} alt="hero" className="background fade-in" />;
  } else if (herostatus === 2) {
    return <img src={IMG3} alt="hero" className="background fade-in" />;
  }
  return null;
};

export default Background;
