import "./Home.scss";
import arrow from "../../src/assets/icons/arrow-right-solid.svg";

const Home = () => {
  return (
    <section className="home">
        <div className="home__text-group-1">
            <div className="home__small-text">
                <p>Smart Shopping Starts Here:
                    <img src={arrow} alt="arrow-right" className="home__arrow" />
                </p>
                
                <h1 className="home__header">Unleash the Power of <span className="text-primary">CardPriceNinja</span></h1>
                <p className="home__body">
                    Powerful, self-serve product and comparison analytics to help you purchase card at the best value. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Home