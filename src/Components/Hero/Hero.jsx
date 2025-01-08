import React, { useState } from "react";
import "./Hero.scss";
import arrow from "../../assets/arrow_btn.png";
import play from "../../assets/play_icon.png";
import puse from "../../assets/pause_icon.png";
const HeroSection = ({
  playstatus,
  heroCount,
  heroData,
  setPlayStatus,
  setHeroCount,
}) => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <p> {heroData.text1}</p>
        <p className="text-orange">{heroData.text2}</p>
      </div>
      <div className="hero_explore">
        <img src={arrow} />
        <p>استكشف المزيد</p>
      </div>
      <div className="hero_dot_play">
        <ul className="hero_dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero_dot orange" : "hero_dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero_dot orange" : "hero_dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero_dot orange" : "hero_dot"}
          ></li>
        </ul>
        <div className="hero_play">
          <img
            onClick={() => setPlayStatus(!playstatus)}
            src={playstatus ? puse : play}
          />
          <p>شغل الفديو</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
