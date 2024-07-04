import React from 'react'
import "./ButtonTooltip.scss";

const ButtonTooltip = (props) => {
  return (
    <div className="buttontooltip-trigger">
        <button className={`confirm__button-${props.buttonaction}`} onClick={props.onClick}>
            {props.label}</button>
        <div className={`buttontooltip buttontooltip-${props.position}`}>
            {props.text}
        </div>
    </div>
  )
}

export default ButtonTooltip