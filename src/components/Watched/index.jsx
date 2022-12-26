import React from "react";
import "./style.css"
import { Figure } from "react-bootstrap";
import Pic from "./img/wached.jpg"

export default ({price, amount, infoText}) => {
    return (
        <Figure>
            <Figure.Image src={Pic}/>
            <Figure.Caption className="price">{price}</Figure.Caption>
            <Figure.Caption className="amount">{amount}</Figure.Caption>
            <Figure.Caption className="wachedtext">{infoText}</Figure.Caption>
        </Figure>
    )
}