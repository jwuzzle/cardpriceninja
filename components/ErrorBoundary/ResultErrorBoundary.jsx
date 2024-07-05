import { useState, useEffect } from "react";
import ninjaerror from "../../src/assets/images/NinjaError.svg";
import "./ErrorBoundary.scss";

const ResultErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);
  
    useEffect(() => {
      const handleError = (event) => {
        if (event.error instanceof TypeError) {
        console.error("ErrorBoundary caught an typeerror", event.error);
      }
        setHasError(true);
      };
  
      // Adding an event listener for componentDidCatch equivalent
      window.addEventListener('error', handleError);
  
      // Cleanup function
      return () => {
        window.removeEventListener('error', handleError);
      };
    }, []);

    const clickButton = () => {
        window.location.href = '/'
    }
  
    if (hasError) {
      return (
        <div className="ninja-error">
            <img src={ninjaerror} className="ninja-error__image" alt="red ninja traffic light" />
          <h1 className="ninja-error__text" >Something went wrong.</h1>
          <p className="ninja-error__description">If you've just entered a SNKRDUNK URL, please ensure it follows this format: 'https://snkrdunk.com/en/trading-cards/91178?slide=right'. Double-check and try again.</p>
          <div className="ninja-error__button-container">
            <button className="ninja-error__button" onClick={clickButton}>
              Return to Home
            </button>
          </div>
        </div>
      );
  }
  return children;
}

export default ResultErrorBoundary;
