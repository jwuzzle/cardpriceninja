import "./SnkrDunkResults.scss";

const Results = (props) => {
  return (
    <div className="snkrdunk-result">
        <h1 className="snkrdunk-result__header">{props.name}</h1>
        <p className="snkrdunk-result__price">~{props.price}
       <span className="snkrdunk-result__copy"> (approximate SNKRDUNK Card Price)</span></p>
        <p className="snkrdunk-result__listing-number">{props.listings} <span className="snkrdunk-result__copy">SNKRDUNK listings</span></p>
        <div className="snkrdunk-result__image-background">
        <img className="snkrdunk-result__image" src={props.image} alt="card image" />
        </div>
        </div>
  )
}

export default Results