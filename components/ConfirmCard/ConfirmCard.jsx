import React from "react";
import "./ConfirmCard.scss";
import ButtonTooltip from "../Tooltip/ButtonTooltip";

const ConfirmCard = (props) => {
  return (
    <div className="confirm">
      <div className="confirm__text">
        <p className="confirm__header">Confirm the Card</p>
        <p className="confirm__description">
          Please confirm if this is the card you're looking for.
        </p>
      </div>
      <div className="cta">
        <div className="cta-group">
          <ButtonTooltip
            label="Yes"
            text="Start pulling listings from SNKRDUNK and eBay"
            position="bottom"
            onClick={props.onClickYes}
            buttonaction="accept"
          />
        </div>
        <div className="cta-group">
          <ButtonTooltip
            label="No"
            text="Return to the homepage to enter a new SNKRDUNK URL"
            position="bottom"
            onClick={props.onClickNo}
            buttonaction="decline"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmCard;
