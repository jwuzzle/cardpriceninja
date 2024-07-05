import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../src/assets/logo/CardPriceNinjaLogo.png";
import logotext from "../../src/assets/logo/CardPriceNinjaLogoText.png";
import search from "../../src/assets/icons/magnifying-glass-solid.svg";
import faq from "../../src/assets/icons/circle-question-regular.svg";
import { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { useNavigate } from "react-router-dom";

/* const navIcons = [
    {src: "../../src/assets/icons/magnifying-glass-solid.svg", alt: "search"},
    {src: "../../src/assets/icons/heart-regular.svg", alt: "heart"},
    {src: "../../src/assets/icons/user-regular.svg", alt: "user"}
] */

const Navbar = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const openSearch = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const navigate = useNavigate();
  const openFaqs = () => {
    navigate('/faq');
  };

  return (
    <header className="header">
      <nav className="nav" id="navbar">
        <Link to="/" className="nav__link">
          <img className="nav__logo" src={logo} alt="logo" />
          <img className="nav__logo-text" src={logotext} alt="cardpriceninja" />
        </Link>
        <div className="nav__menu">
          {openSearchBar === true ? (
            <Searchbar helper="off" openSearchBar={() => openSearch()} />
          ) : null}
          <img onClick={openSearch} className="nav__menu-object" src={search} />
          <img onClick={openFaqs} className="nav__menu-object" src={faq} />
          {/* {navIcons.map((icon, index) => (
        <img className="nav__menu-object" key={index} src={icon.src} alt={icon.alt}/>
    ))} */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
