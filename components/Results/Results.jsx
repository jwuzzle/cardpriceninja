import React from 'react'

const Results = (props) => {
  return (
    <div>
        <p>Card ID: <span>{props.id}</span></p>
        <p>Card Number: <span>{props.name}</span></p>
        <p>Card Price: <span>{props.price}</span></p>
        <p>Number of Listings: <span>{props.listings}</span></p>
        <img src={props.image} alt="card image" />
        </div>
  )
}

export default Results