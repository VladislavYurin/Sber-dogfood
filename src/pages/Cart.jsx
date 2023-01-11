import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import OrderedProduct from "../components/OrderedProduct/OrderedProduct";

export default ({ cart, setCart }) => {

    const orderCard = {
        border: "1px solid grey",
        padding: "15px",
        borderRadius: "15px",
        boxShadow: "0 0 10px"
    }

    const stylePrice = {
        textAlign: "center"
    }

    const btnStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    // Общая цена

    const [totalPrice, setTotalPrice] = useState(() => cart.reduce((acc, el) => acc + (el.price * el.amount), 0))

    // Общая скидка

    const [totalDiscount, setTotalDiscount] = useState(() => {
        let allProductsCost = totalPrice;
        let discount = cart.reduce((acc, el) => acc + ((el.price * ((100 - el.discount) / 100)) * el.amount), -allProductsCost)
        return Math.trunc(discount)
    })

    // Итоговая цена товаров

    const [resultPrice, setResultPrice] = useState(Math.ceil(totalPrice + totalDiscount))

    const [cartWord, setCartWord] = useState();
    const [cartAmount, setCartAmount] = useState();

    useEffect(() => {
        setCartAmount(cart.reduce((acc, el) => acc + el.amount, 0));
    }, [cart]);

    useEffect(() => {
        if ((cartAmount == 11) || (cartAmount == 12) || (cartAmount == 13) || (cartAmount == 14)) { setCartWord("товаров"); }
        else if ((cartAmount % 10) === 1) { setCartWord("товар"); }
        else if (((cartAmount % 10) == 2) || ((cartAmount % 10) == 3) || ((cartAmount % 10) == 4)) { setCartWord("товара"); }
        else { setCartWord("товаров"); }
    }, [cartAmount])

    return (
        <Container style={{ maxWidth: "1000px" }}>

            <Row>
                <Col md={12} style={{ fontSize: "30px", padding: "20px 15px" }}> {cart.length > 0 ? cartAmount + " " + cartWord + " в корзине" : "Нет товаров в корзине =("}

                </Col>
                <Col md={8}>

                    {cart.map((el, i) => <OrderedProduct
                        key={i} {...el}
                        setCart={setCart}
                        setTotalPrice={setTotalPrice}
                        setTotalDiscount={setTotalDiscount}
                        setResultPrice={setResultPrice} />)}

                </Col>
                <Col md={4}>
                    <div style={orderCard}>
                        <Col md={12}><strong>Ваша корзина</strong></Col>
                        <Row>
                            <Col md={6} sm={6} xs={6}>
                                Товары ({cartAmount})
                            </Col>
                            <Col md={6} sm={6} xs={6} style={stylePrice}>
                                {totalPrice} ₽
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} sm={6} xs={6}>Скидка</Col>
                            <Col md={6} sm={6} xs={6} className="text-danger" style={stylePrice}>{totalDiscount} ₽</Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col md={6} sm={6} xs={6} className="pb-3"><strong>Общая стоимость</strong></Col>
                            <Col md={6} sm={6} xs={6} style={stylePrice}>{resultPrice} ₽</Col>
                        </Row>
                        <div style={btnStyle}>
                            <Button size="sm" variant="warning">Оформить заказ</Button>
                        </div>

                    </div>
                </Col>
            </Row>

        </Container>
    )
}