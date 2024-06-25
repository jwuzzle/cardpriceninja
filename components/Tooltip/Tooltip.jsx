import React from 'react'
import "./Tooltip.scss";
import tooltip from "../../src/assets/icons/tooltip.png";

const Tooltip = (props) => {
  return (
    <div className="tooltip-trigger">
        <button className="confirm__button-accept" onClick={props.onClick}>
            {props.label}</button>
        <div className={`tooltip tooltip-${props.position}`}>
            {props.text}
        </div>
    </div>
  )
}

export default Tooltip