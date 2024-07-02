import "./SnkrDunkResults.scss";

const Results = (props) => {
  return (
    <div className="snkrdunk-result">
      <div className="snkrdunk-result__image-background">
          <img
            className="snkrdunk-result__image"
            src={props.image}
            alt="card image"
          />
        </div>
        <div className="snkrdunk-result__text">
          <h1 className="snkrdunk-result__header">{props.name}</h1>
          <p className="snkrdunk-result__price">Price: ~{props.price}</p>
          <p className="snkrdunk-result__listing-number">
            Listings: {props.listings}
          </p>
          </div>
        </div>
  );
};

export default Results;
