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
          Elevate Your Collection with the Best Deals
            <img src={arrow} alt="arrow-right" className="home__arrow" />
          </p>

          <h1 className="home__header">
            Unleash the Power of{" "}
            <span className="text__primary">Card<span className="text__secondary">Price<span className="text__primary">Ninja</span></span></span>
          </h1>
          <p className="home__body">
          Discover the ultimate tool for purchasing Japanese cards at the best value. Our powerful, self-serve product and comparison analytics help you find the best deals by comparing listings on SNKRDUNK and eBay.
          </p>
          <p className="home__body">
          Try it now by entering the SNKRDUNK URL of the card you are interested in.
          </p>
          <Searchbar />
        </div>
        <div className="home__hero">
          <HeroCarousel />
        </div>
      </div>
      {/* <div className="trending">
        <section className="trending-section">
          <h2 className="trending-section__header">Trending</h2>
          <div className="trending-section__items">
            {["Umbreon VMAX", "Giratina V", "Rayquaza VMAX"].map((product) => (
              <div>{product}</div>
            ))}
          </div>
        </section>
      </div> */}
    </section>
  );
};

export default Home;
