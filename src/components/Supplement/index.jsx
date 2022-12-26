import React from "react";
import Pic from "./img/supp.jpg";
import { Card } from "react-bootstrap"
import "./style.css"

const PicStyle = {
    backgroundImage: `url(${Pic})`,
    backgroundSize: `cover`,
    height: `200px`
}

export default ({title, text, price}) => {
    return (
        <Card style={PicStyle}>
            <div className="mainSuppInfo">
                <h2>{title}</h2>
                <p>{text}</p>
                <h2>{price}</h2>
            </div>
        </Card>
    )
}