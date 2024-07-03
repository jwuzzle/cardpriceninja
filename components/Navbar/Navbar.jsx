import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../src/assets/logo/CardPriceNinjaLogo.svg";
import logotext from "../../src/assets/logo/CardPriceNinjaLogoText.svg";
import search from "../../src/assets/icons/magnifying-glass-solid.svg";
import { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";



const navIcons = [
    {src: "../../src/assets/icons/magnifying-glass-solid.svg", alt: "search"},
    {src: "../../src/assets/icons/heart-regular.svg", alt: "heart"},
    {src: "../../src/assets/icons/user-regular.svg", alt: "user"}
]

const Navbar = () => {

const [openSearchBar, setOpenSearchBar] = useState(false)

const openSearch = () => {
    setOpenSearchBar(!openSearchBar)
}

console.log(openSearchBar)


  return (
    <header className="header">
        <nav className="nav">
    <Link to="/" className="nav__link">
        <img className="nav__logo" src={logo} alt="logo" />
        <img className="nav__logo-text" src={logotext} alt="cardpriceninja" />
{/*         <p className="nav__logo-text">Card<span className="text-primary">Price</span><span>Ninja</span></p> */}
    </Link>
    <div className="nav__menu">
    {openSearchBar === true ? (
        <Searchbar 
        helper="helper-off"
        openSearchBar={() => openSearch()} />
    ) : (null)}
    <img onClick={openSearch} className="nav__menu-object" src={search} />

    {/* {navIcons.map((icon, index) => (
        <img className="nav__menu-object" key={index} src={icon.src} alt={icon.alt}/>
    ))} */}
    </div>
        </nav>

    </header>
  )
}

export default Navbar