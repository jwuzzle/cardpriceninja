import React from 'react'
import "./ButtonTooltip.scss";
import tooltip from "../../src/assets/icons/tooltip.png";

const ButtonTooltip = (props) => {
  return (
    <div className="buttontooltip-trigger">
        <button className="confirm__button-accept" onClick={props.onClick}>
            {props.label}</button>
        <div className={`buttontooltip buttontooltip-${props.position}`}>
            {props.text}
        </div>
    </div>
  )
}

export default ButtonTooltip