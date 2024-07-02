import React from 'react'
import "./ConfirmCard.scss";
import ButtonTooltip from '../Tooltip/ButtonTooltip';

const ConfirmCard = (props) => {
  return (
    <div className="confirm">
        <p className="confirm__header">Confirm the Card</p>
        <p className="confirm__description">Please confirm if this is the card you're looking for.</p>
        <div className="cta">
            <div className="cta-group">
          {/* <button className="confirm__button-accept" onClick={props.onClick}>
            Yes
          </button> */}
          <ButtonTooltip 
          label="Yes"
          text="Start pulling listings from SNKRDUNK and eBay"
          position="bottom"
          onClick={props.onClickYes}/>
          </div>
          <div className="cta-group">
      {/*     <button className="confirm__button-decline" onClick={props.onClick}>No</button> */}
          <ButtonTooltip 
          label="No"
          text="Return to the homepage to enter a new SNKRDUNK URL"
          position="bottom"
          onClick={props.onClickNo}/>
       </div>
        </div>
        </div>
  )
}

export default ConfirmCard