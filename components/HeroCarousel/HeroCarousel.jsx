"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./HeroCarousel.scss";

const heroImages = [
    { imgUrl: "../../src/assets/images/umbreon.svg", alt: "umbreon vmax card"},
    { imgUrl: "../../src/assets/images/giratina.svg", alt: "giratina v card"},
    { imgUrl: "../../src/assets/images/mew.svg", alt: "mew ex card"},
    { imgUrl: "../../src/assets/images/machamp.svg", alt: "machamp v card"},
    { imgUrl: "../../src/assets/images/glaceon.svg", alt: "glaceon vmax card"},
]

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      {" "}
      <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false} className="hero-carousel__preview">
        {heroImages.map((image, index) => (
            <img key={index} src={image.imgUrl} alt={image.alt} className="hero-carousel__main-image"/>
        ))}
      </Carousel>
      {/* <img src={handdrawarrow} alt="arrow" className="arrow"/> */}
    </div>
  );
};

export default HeroCarousel;
