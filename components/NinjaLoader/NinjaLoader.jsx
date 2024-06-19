import "./NinjaLoader.scss";
import ninjaLoader from "../../src/assets/images/user-ninja-solid.svg";

const NinjaLoader = () => {
  return (
    <div className="loader-container no-scroll">
        <img src={ninjaLoader} id="loader" className="loader"/>
    </div>
  )
}

export default NinjaLoader