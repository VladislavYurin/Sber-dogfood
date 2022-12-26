import React from "react";
import {Figure} from "react-bootstrap";
import newsPic from "./img/news.jpg"
import "./style.css"



export default ({infoText}) => {
    return (
        <Figure>
            <Figure.Image src={newsPic}/>
            <Figure.Caption className="picDesc">{infoText}</Figure.Caption>
        </Figure>
    )
}