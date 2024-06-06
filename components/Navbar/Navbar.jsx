import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../src/assets/logo/CardPriceNinjaLogo.svg";



const navIcons = [
    {src: "../../src/assets/icons/magnifying-glass-solid.svg", alt: "search"},
    {src: "../../src/assets/icons/heart-regular.svg", alt: "heart"},
    {src: "../../src/assets/icons/user-regular.svg", alt: "user"}
]

const Navbar = () => {
  return (
    <header className="header">
        <nav className="nav">
    <Link href="/" className="nav__link">
        <img className="nav__logo" src={logo} alt="logo" />
        <p className="nav__logo-text">Card<span className="text-primary">Price</span><span>Ninja</span></p>
    </Link>
    <div className="nav__menu">
    {navIcons.map((icon, index) => (
        <img className="nav__menu-object" key={index} src={icon.src} alt={icon.alt}/>
    ))}
    </div>
        </nav>

    </header>
  )
}

export default Navbar