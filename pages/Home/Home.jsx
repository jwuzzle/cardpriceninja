import "./Home.scss";
import arrow from "../../src/assets/icons/arrow-right-solid.svg";
import Searchbar from "../../components/Searchbar/Searchbar";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import HomeImages from "../../components/HomeImages/HomeImages";

const Home = () => {
  return (
    <section className="home">
      <div className="home__group-1">
        <div className="home__text">
          {/* <p className="home__small-text">
          Elevate Your Collection with the Best Deals
            <img src={arrow} alt="arrow-right" className="home__arrow" />
          </p> */}

          <h1 className="home__header">
            Navigate the Card Market with{" "}
            <span className="text__primary">
              Card
              <span className="text__secondary">
                Price<span className="text__primary">Ninja</span>
              </span>
            </span>
          </h1>
          <p className="home__body">
            Discover the ultimate tool for purchasing Japanese cards at the best
            value. Our powerful, self-serve product and comparison analytics
            help you find the best deals by comparing listings on SNKRDUNK and
            eBay.
          </p>
          <p className="home__body">
            Try it now by entering the SNKRDUNK URL of the card you are
            interested in.
          </p>
          <Searchbar />
        </div>
        {/* <div className="home__hero">
          <HeroCarousel />
        </div> */}
        <div className="home__hero">
          <HomeImages />
        </div>
      </div>
      <div className="product">
        <h2 className="product__header">Compare Card Listings on SNKRDunk and eBay</h2>
        <p className="product__subheader">
          Here, you can easily view and compare listings for your favorite cards
          from both SNKRDunk and eBay. Whether you're looking for graded or
          ungraded cards, we've got you covered.
        </p>
        <div className="product__features">
          <h3 className="product__features-title">Why Use This Page?</h3>
          <ul className="product__features-list">
            <li className="product__features-item">
              Comprehensive Listings: See all available listings for the card
              you're interested in from both SNKRDunk and eBay.
            </li>
            <li className="product__features-item">
              Graded vs. Ungraded: Compare the prices and conditions of graded
              and ungraded cards side-by-side.
            </li>
            <li className="product__features-item">
              Best Deals: Determine which site offers the best deal for the card
              you want to buy.
            </li>
            <li className="product__features-item">
              Informed Decision: Make an informed purchase decision by comparing
              prices, conditions, and seller reputations across both platforms.
            </li>
          </ul>
          <p className="product__goal">
            Our goal is to provide you with a convenient and transparent way to
            find the best deals on cards. Happy shopping!
          </p>
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
