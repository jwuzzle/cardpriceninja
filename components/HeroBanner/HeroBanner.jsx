import "./HeroBanner.scss";
import Searchbar from "../../components/Searchbar/Searchbar";

const HeroBanner = (props) => {
  return (
    <div className="hero">
        <div className="hero__text">
          <div className="hero__headline">
            <h1 className="hero__headline--header first">
              Navigate The <span className="hero__headline--header second">Best Rates.</span>
            </h1>
          </div>
          <div className="hero__divider"></div>
          <p className="hero__text--subheader">
            Experience the premier solution for purchasing Japanese Pokémon cards at
            unbeatable value.
          </p>
          <Searchbar
          helper="on" />
        </div>
          <img className="hero__image" src={props.image} />
      </div>
  )
}

export default HeroBanner