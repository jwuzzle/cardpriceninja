import "./Home.scss";
import arrow from "../../src/assets/icons/arrow-right-solid.svg";
import Searchbar from "../../components/Searchbar/Searchbar";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";

const Home = () => {
  return (
    <section className="home">
      <div className="home__group-1">
        <div className="home__text">
          <p className="home__small-text">
            Smart Shopping Starts Here
            <img src={arrow} alt="arrow-right" className="home__arrow" />
          </p>

          <h1 className="home__header">
            Unleash the Power of{" "}
            <span className="text-primary">CardPriceNinja</span>
          </h1>
          <p className="home__body">
            Powerful, self-serve product and comparison analytics to help you
            purchase cards at the best value.
          </p>

          <Searchbar />
        </div>
        <div className="home__hero">
          <HeroCarousel />
        </div>
      </div>
      <div className="trending">
        <section className="tending-section">
          <h2 className="trending-section__header">Trending</h2>
          <div className="trending-section__items">
            {["Umbreon VMAX", "Giratina V", "Rayquaza VMAX"].map((product) => (
              <div>{product}</div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
