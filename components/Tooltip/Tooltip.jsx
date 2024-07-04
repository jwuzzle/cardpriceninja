import React from 'react'
import "./Tooltip.scss";
import tooltip from "../../src/assets/icons/tooltip.png";

const Tooltip = (props) => {
  return (
    <div className="tooltip-trigger">
        <img src={tooltip} className="tooltip-image" />
        <div className={`tooltip tooltip-${props.position}`}>
            {props.text}
        </div>
    </div>
  )
}

export default Tooltip