import React from 'react';
import '../App.css';

function TextComponent(props) {
    return(
        <div style={{ fontSize: props.fontSize , color: props.color, fontWeight: props.fontWeight == null? "bold" : props.fontWeight, letterSpacing: props.spacing ? "1px" : 0}} className="details-light">{props.text}</div>
    )
}
export default TextComponent;