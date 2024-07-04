import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import card from "../../src/assets/images/giratina.svg";
import card2 from "../../src/assets/images/umbreon.svg";
import card3 from "../../src/assets/images/machamp.svg";
import bannerimage from "../../src/assets/images/bannerimage.svg";
import product1 from "../../src/assets/images/home-product.svg";
import "./Home2.scss";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Marketplace from "../../components/Marketplace/Marketplace";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

const Home2 = () => {
  return (
    <section>
      <HeroBanner image={bannerimage} />
      <Marketplace />
      <HowItWorks />
    </section>
  );
};

export default Home2;
