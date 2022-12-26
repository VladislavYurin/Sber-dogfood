import React from "react";
import mainPic from "./img/Подарок.jpg";
import { Card } from "react-bootstrap"
import "./style.css"

const mainPicStyle = {
    backgroundImage: `url(${mainPic})`,
    backgroundSize: `cover`,
    height: `200px`
}
const mainText = {
    fontSize: `20px`
}


export default ({title, text}) => {
    return (
        <Card style={mainPicStyle}>
            <div className="mainPicInfo">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </Card>
    )
}