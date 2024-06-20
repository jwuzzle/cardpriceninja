import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import card from "../../src/assets/images/giratina.svg";
import card2 from "../../src/assets/images/umbreon.svg";
import card3 from "../../src/assets/images/machamp.svg";
import product1 from "../../src/assets/images/home-product.svg";
import "./Home2.scss";

const Home2 = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero__text">
          <div className="hero__headline">
            <h1 className="hero__headline--header first">
              Navigate The{" "}
              <span className="hero__headline--header second">Best Rates.</span>
            </h1>
          </div>
          <div className="hero__divider"></div>
          <p className="hero__text--subheader">
            Experience the premier solution for purchasing Japanese cards at
            unbeatable value.
          </p>
          <Searchbar />
        </div>
        <div className="hero__image">
          <div className="hero__image--shape"></div>
          <img className="hero__image--card one" src={card} />
          <img className="hero__image--card two" src={card2} />
          <img className="hero__image--card three" src={card3} />
        </div>
      </div>
      <div className="home-divider"></div>
      <div className="product">
        <div className="product__heading">
          <h2 className="product__heading--title">How It Works</h2>
          <p className="product__heading--description">
            Compare card listings on SNKRDunk and eBay. Whether you're looking
            for graded or ungraded cards, we've got you covered.
          </p>
        </div>
        <div className="product__features">
            <div className="product__image">
                <img className="product__image--scale" src={product1} />
            </div>
            <div className="product__feature-list">
                <ul className="feature-list">
                    <li className="feature-list__main">Comprehensive Listings
                        <span className="feature-list__description">Access available listings for your desired card from SNKRDunk and eBay.</span> 
                    </li>
                    <li className="feature-list__main">Graded vs. Ungraded
                        <span className="feature-list__description">Compare the prices and conditions of graded and ungraded cards side-by-side.</span> 
                    </li>
                    <li className="feature-list__main">Best Deals
                        <span className="feature-list__description">Determine which site offers the best deal for the card you want to buy.</span> 
                    </li>
                    <li className="feature-list__main">Informed Decision
                        <span className="feature-list__description">Make an informed purchase decision by comparing prices and conditions across both platforms.</span> 
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;
