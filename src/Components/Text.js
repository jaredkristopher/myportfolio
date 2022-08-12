import React from 'react';
import '../App.css';

function TextComponent(props) {
    return(
        <h1 style={{ fontSize: props.fontSize , color: props.color, fontWeight: props.fontWeight == null? "bold" : props.fontWeight}} className="details-light">{props.text}</h1>
    )
}
export default TextComponent;