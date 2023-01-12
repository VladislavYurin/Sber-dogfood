import React from "react";
import "./style.css"
import { useContext, useRef, useState, useEffect } from "react";
import Card from "../Card";
import { Context } from "../../App";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import { ButtonGroup, Button } from "react-bootstrap";



export default ({ flag, title }) => {
    const { goods, setGoods } = useContext(Context)

    let position = 0

    const elem = useRef()

    if (flag == "likes") {
        setGoods(goods.sort((a, b) => b.likes.length - a.likes.length))
    } else if (flag == "price") {
        setGoods(goods.sort((a, b) => a.price - b.price))
    } else {
        goods.sort((a, b) => b.discount - a.discount)
    }

    const moveRight = () => {

        if (window.innerWidth <= 694) {
            position -= 215
            position = Math.max(position, (elem.current.childNodes.length - 4) * -215)
        } else {
            position -= 230
            position = Math.max(position, (elem.current.childNodes.length - 4) * -230)
        }
        elem.current.childNodes.forEach((child) => child.style = `transform: translateX(${position}px)`)
    }

    const moveLeft = () => {
        if (window.innerWidth <= 694) {
            position += 215
            position = Math.min(position, 0)
        } else {
            position += 230
            position = Math.min(position, 0)
        }
        elem.current.childNodes.forEach((child) => child.style = `transform: translateX(${position}px)`)
    }

    return (
        <div className="caruselBlock">
            <div className="btnGroups">
                <h3>{title}</h3>
                <ButtonGroup size="sm">
                    <Button variant="light" className="btnsGroup rounded-circle" onClick={moveLeft} ><ChevronLeft /></Button>
                    <Button disabled variant="light"></Button>
                    <Button variant="light" className="btnsGroup rounded-circle" onClick={moveRight}><ChevronRight /></Button>
                </ButtonGroup>
            </div>

            <div className="productsInCarusel" ref={elem}>
                {goods.map((el, i) => <Card
                    key={i}
                    {...el}
                    name={el.name.length > 15 ? el.name.slice(0, 15) + "..." : el.name} />)}
            </div>
        </div>
    )
}