import "../Css/button.css"
import React from "react";
export default function Button(props) {
    return <button className="main-btn">{props.children}</button>;
}
