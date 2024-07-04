import "./Marketplace.scss";
import ebaylogo from "../../src/assets/logo/ebaylogo.svg";
import snkrlogo from "../../src/assets/logo/snkrdunklogo.svg";

const Marketplace = () => {
  return (
    <div className="homepage-compare-listings">
      <h2 className="homepage-compare-listings__header">Explore Marketplaces</h2>
      <p className="homepage-compare-listings__description--top">
        Find the best deals on Japanese cards by comparing listings from top
        marketplaces.
      </p>
      <div className="logo-container">
        <div className="carousel">
          <div className="carousel-container">
            <div className="carousel-group">
              <img src={ebaylogo} alt="eBay Logo" className="logo" />
              <img src={snkrlogo} alt="SNKRDUNK Logo" className="logo" />
              <img src={ebaylogo} alt="eBay Logo" className="logo" />
              <img src={snkrlogo} alt="SNKRDUNK Logo" className="logo" />
              <img src={ebaylogo} alt="eBay Logo" className="logo" />
              <img src={snkrlogo} alt="SNKRDUNK Logo" className="logo" />
              <img src={ebaylogo} alt="eBay Logo" className="logo" />
              <img src={snkrlogo} alt="SNKRDUNK Logo" className="logo" />
              <img src={ebaylogo} alt="eBay Logo" className="logo" />
              <img src={snkrlogo} alt="SNKRDUNK Logo" className="logo" />
              <img src={ebaylogo} alt="eBay Logo" className="logo" />
              <img src={snkrlogo} alt="SNKRDUNK Logo" className="logo" />
              <img src={ebaylogo} alt="eBay Logo" className="logo" />
              <img src={snkrlogo} alt="SNKRDUNK Logo" className="logo" />
              <img src={ebaylogo} alt="eBay Logo" className="logo" />
              <img src={snkrlogo} alt="SNKRDUNK Logo" className="logo" />
              <img src={ebaylogo} alt="eBay Logo" className="logo" />
              <img src={snkrlogo} alt="SNKRDUNK Logo" className="logo" />
              <img src={ebaylogo} alt="eBay Logo" className="logo" />
              <img src={snkrlogo} alt="SNKRDUNK Logo" className="logo" />
            </div>
          </div>
        </div>
      </div>
      <p className="homepage-compare-listings__description--bottom">
      </p>
    </div>
  );
};

export default Marketplace;
