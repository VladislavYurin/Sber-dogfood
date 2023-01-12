import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ButtonGroup, Button, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import Supplement from "../components/Supplement";
import News from "../components/News";
import Headlines from "../components/Headlines";
import Watched from "../components/Watched";
import Carusel from "../components/Carusel/Carusel";

import { ChevronRight } from "react-bootstrap-icons"

import "./Main.css"

export default () => {
    return (
        <>
            <div className="headerContent">
                <div className="headerInfo">
                    <h1 className="headerTitle">Крафтовые лакомства для собак</h1>
                    <p className="headerText">Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
                    <Link to="/catalog"><Button variant="light" className="mainHeaderBtn">Каталог
                        <ChevronRight className="btnArrow" /></Button></Link>
                </div>
            </div>
            <Container className="mainContainer">

                <Row className="mainContent">
                    <Col md={12} >
                        <Banner title="Подарок за первый заказ!" text="Легкое говяжье - пластины" />
                    </Col>

                    <Col md={12} > <Carusel flag="likes" title="Лакомства" /> </Col>

                    <Col md={6} className="spaceBtm"> <Supplement title="Наборы" text="для дрессировки" price="от 840 Р" /></Col>
                    <Col md={6} className="spaceBtm"> <Supplement title="Микс масел" text="пищевая здоровая натуральная добавка" /></Col>

                    <Col md={12} > <Carusel flag="discount" title="Хиты" /> </Col>

                    <Col md={6} className="spaceBtm"><Supplement title="Рога северного оленя" text="от 10 до 30 кг" /></Col>
                    <Col md={6} className="spaceBtm"><Supplement title="Слипы из шеи индейки" text="100% натуральное" /></Col>

                    <Headlines header="Новости" />

                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col md={3} xs={6}><News infoText="Дрессировка щенка: что нужно знать" /></Col>
                                <Col md={3} xs={6}><News infoText="Идем гулять с собакой в лес" /></Col>
                                <Col md={3} className="d-none d-md-block"><News infoText="Сухие корма для собак" /></Col>
                                <Col md={3} className="d-none d-md-block"><News infoText="6 лакомств для собак" /></Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col md={3} xs={6}><News infoText="Дрессировка щенка: что нужно знать" /></Col>
                                <Col md={3} xs={6}><News infoText="Идем гулять с собакой в лес" /></Col>
                                <Col md={3} className="d-none d-md-block"><News infoText="Сухие корма для собак" /></Col>
                                <Col md={3} className="d-none d-md-block"><News infoText="6 лакомств для собак" /></Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>

                    <Col md={12}> <Banner title="Подарок за первый заказ!" text="Легкое говяжье - пластины" /></Col>

                    <Headlines header="Вы смотрели" />

                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col  ><Watched price="500 Р" amount="1 шт" infoText="Игрушка-погремушка для мелких пород" /></Col>
                                <Col  ><Watched price="500 Р" amount="1 шт" infoText="Игрушка-погремушка для средних пород" /></Col>
                                <Col className="d-none d-md-block"><Watched price="500 Р" amount="1 шт" infoText="Игрушка-погремушка для крупных пород" /></Col>
                                <Col className="d-none d-md-block"><Watched price="500 Р" amount="1 шт" infoText="Бублик из бычьего корня" /></Col>
                                <Col className="d-none d-md-block"><Watched price="500 Р" amount="1 шт" infoText="Печенья с яблоком" /></Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col  ><Watched price="500 Р" amount="1 шт" infoText="Игрушка-погремушка для мелких пород" /></Col>
                                <Col  ><Watched price="500 Р" amount="1 шт" infoText="Игрушка-погремушка для средних пород" /></Col>
                                <Col className="d-none d-md-block"><Watched price="500 Р" amount="1 шт" infoText="Игрушка-погремушка для крупных пород" /></Col>
                                <Col className="d-none d-md-block"><Watched price="500 Р" amount="1 шт" infoText="Бублик из бычьего корня" /></Col>
                                <Col className="d-none d-md-block"><Watched price="500 Р" amount="1 шт" infoText="Печенья с яблоком" /></Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>

                </Row>

            </Container>

        </>
    )
}