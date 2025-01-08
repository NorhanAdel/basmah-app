import React, { useEffect, useState } from "react";
import About from "../../Components/About/About";
import Background from "../../Components/Background/Background";
import HeroSection from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Price from "../../Components/Price/Price";
import { hero } from "../../constant/hero";
import Footer from "../../Container/Footer/Footer";

function Home() {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className=" homepage">
      <Background playstatus={playStatus} herostatus={heroCount} />
      <Navbar />
      <HeroSection
        playstatus={playStatus}
        heroCount={heroCount}
        heroData={hero[heroCount]}
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
      />
      <About />
      <Price />
      <Footer />
    </section>
  );
}

export default Home;
