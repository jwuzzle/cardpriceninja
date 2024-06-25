import React from 'react'
import "./ConfirmCard.scss";
import Tooltip from '../Tooltip/Tooltip';

const ConfirmCard = (props) => {
  return (
    <div className="confirm">
        <p className="confirm__header">Confirm the Card</p>
        <p className="confirm__description">Please confirm if the card below is the one you're looking for.</p>
        <div className="cta">
            <div className="cta-group">
          {/* <button className="confirm__button-accept" onClick={props.onClick}>
            Yes
          </button> */}
          <Tooltip 
          label="Yes"
          text="Start pulling listings from SNKRDUNK and eBay"
          position="left"
          onClick={props.onClickYes}/>
          </div>
          <div className="cta-group">
      {/*     <button className="confirm__button-decline" onClick={props.onClick}>No</button> */}
          <Tooltip 
          label="No"
          text="Return to the homepage to enter a new SNKRDUNK URL"
          position="right"
          onClick={props.onClickNo}/>
       </div>
        </div>
        </div>
  )
}

export default ConfirmCard