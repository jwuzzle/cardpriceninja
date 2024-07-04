import "./HowItWorks.scss";
import productimage from "../../src/assets/images/productimage.svg";
import { useRef, useEffect } from 'react';

const HowItWorks = () => {

  return (
    <div className="how-it-works">
      <div className="how-it-works__image">
        <img className="how-it-works__image--scale" src={productimage} />
      </div>
      <div className="how-it-works__top">
        <h2 className="how-it-works__title">How It Works</h2>
        <p className="how-it-works__description">
          Compare card listings on SNKRDunk and eBay. Whether you're looking for
          graded or ungraded cards, we've got you covered.
        </p>
      </div>
      <div className="how-it-works__features">
        <div className="how-it-works__feature-list">
          <ul className="feature-list">
            <li className="feature-list__main fly-in-leftside">
              Comprehensive Listings
              <span className="feature-list__description">
                Access available listings for your desired card from SNKRDunk
                and eBay.
              </span>
            </li>
            <li className="feature-list__main fly-in-rightside">
              Graded vs. Ungraded
              <span className="feature-list__description">
                Compare the prices and conditions of graded and ungraded cards
                side-by-side.
              </span>
            </li>
            <li className="feature-list__main fly-in-leftside">
              Best Deals
              <span className="feature-list__description">
                Determine which site offers the best deal for the card you want
                to buy.
              </span>
            </li>
            <li className="feature-list__main fly-in-rightside">
              Informed Decision
              <span className="feature-list__description">
                Make an informed purchase decision by comparing prices and
                conditions across both platforms.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
