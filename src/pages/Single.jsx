import React, { useEffect, useState, useContext } from "react";
import { Context } from "../App"
import { useParams } from "react-router-dom"
import { Button, Container, Col, Row, Alert, Table } from "react-bootstrap";
import { Truck, PencilSquare } from "react-bootstrap-icons";

import ProductCell from "../components/ProductCell";
import Reviews from "../components/SetReview/setReview"
import WatchReview from "../components/WatchReview/watchReview"



export default ({ setCart }) => {

    const allReviewsSt = {
        backgroundColor: "transparent",
        color: "black",
        border: "1px solid black",
        width: "100%",
        marginBottom: "20px"
    }

    const colSt = {
        marginBottom: "15px"
    }

    const fontSt = {
        fontWeight: "700"
    }

    const { api, user, products } = useContext(Context);

    const [product, setProduct] = useState({})

    const [productName, setProductName] = useState("")
    const [reviews, setReviews] = useState([])

    const [comment, setComment] = useState(false)
    const [isChangePriceShown, setIsChangePriceShown] = useState(false)
    const [allReviews, setAllReviews] = useState(false)


    let params = useParams();
    // console.log(params)
    useEffect(() => {
        api.getProduct(params.id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
                setProductName(data.author.name);
            })
    }, [])

    // const reaviewsHandler = () => {
    //     setIsReviewsShown(!isReviewsShown)
    //     api.getReviews(params.id)
    //         .then(res => res.json())
    //         .then(data =>  {
    //             console.log(data, "xxx")
    //             setReviews(data)
    //         })
    // }

    useEffect(() => {
        api.getReviews(params.id)
            .then(res => res.json())
            .then(data => {
                console.log(data, "xxx")
                setReviews(data)
            })
    }, [])

    const commentHandler = () => {
        setComment(true)
    }

    const handler = (e) => {
        e.preventDefault()
        setIsChangePriceShown(!isChangePriceShown)
    }

    const allReviewsHandler = () => {
        setAllReviews(true)
        console.log(product, user)
    }

    const closeAllReviewsHandler = () => {
        setAllReviews(false)
    }

    const cartHandler = e => {
        e.preventDefault();
        products.map((el, i) => {
            el.amount = 1;
            if (el._id === product._id) {
                setCart(prev => {
                    let res = prev.some((prevEl) => {
                        return prevEl._id === product._id
                    })
                    if (res) {
                        return [...prev]
                    } else {
                        return [...prev, el]
                    }

                })
            }
        })
    }
    // products.map((el, i) => {
    //     el.amount = 1;
    //     if (el._id === _id) {
    //         setCart(prev => {
    //             let res = prev.some((prevEl) => {
    //                 return prevEl._id === _id
    //             })
    //             if (res) {
    //                 return [...prev]
    //             } else {
    //                 return [...prev, el]
    //             }

    //         })
    //     }
    // })


    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} style={{ marginTop: "20px" }}>
                        <h2 style={fontSt}>
                            {product.name && <ProductCell value={product.name} setProduct={setProduct} product={product} id={params.id} type="name" tagMain="h1" tagInp="input" />}
                        </h2>
                    </Col>
                    <Col xs={12} md={8} style={colSt}>
                        {product.pictures && <ProductCell value={product.pictures} setProduct={setProduct} product={product} id={params.id} type="pictures" tagMain="img" tagInp="input" />}
                    </Col>
                    <Col xs={12} md={4} style={colSt}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <>
                                <div>
                                    {product.discount && <small><del>{product.price} ₽</del></small>}
                                    <div><strong className={product.discount ? "text-danger" : "text-dark"}>{Math.ceil(product.price * ((100 - product.discount) / 100))}</strong></div>
                                </div>

                                {user.name === productName && <a href="" onClick={handler}><PencilSquare /></a>}
                            </>
                        </div>
                        {isChangePriceShown && <div>
                            <span style={{ fontWeight: "800" }}>Установить цену и скидку для товара</span>
                            {product.price >= 0 && <ProductCell value={product.price} setProduct={setProduct} product={product} id={params.id} type="price" tagMain="div" tagInp="input" />}
                            {product.discount >= 0 && <ProductCell value={product.discount} setProduct={setProduct} product={product} id={params.id} type="discount" tagMain="div" tagInp="select" />}
                        </div>}
                        <Row>

                            <Col md={6} style={colSt}>
                                <Button style={{ padding: "10px 40px" }} size="sm" variant="warning" onClick={cartHandler}>В корзину</Button>
                            </Col>
                        </Row>
                        <Alert variant="secondary" className="mt-3">
                            <Row>
                                <Col md={1}><Truck /></Col>
                                <Col> <small>Доставка по всему миру!</small></Col>
                            </Row>
                        </Alert>
                    </Col>
                    <Col xs={12} style={colSt}>
                        <h2 style={fontSt}>Описание</h2>
                        <p>
                            {product.description && <ProductCell value={product.description} setProduct={setProduct} product={product} id={params.id} type="description" tagMain="p" tagInp="textarea" />}
                        </p>
                    </Col>
                    <Col xs={12} style={colSt}>
                        <h2 style={fontSt}>Характеристики</h2>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <th>Вес</th>
                                    <td>
                                        {product.wight && <ProductCell value={product.wight} setProduct={setProduct} id={params.id} product={product} type="wight" tagMain="div" tagInp="input" />}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Цена</th>
                                    <td>{product.price} ₽
                                        за 100 грамм</td>
                                </tr>
                                <tr>
                                    <th>Польза</th>
                                    <td>{product.description}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={12} style={colSt}>
                        <h2 style={fontSt}>Отзывы</h2>
                    </Col>
                    <Col xs={12} style={colSt}>
                        <Button onClick={commentHandler} variant="warning">Оставить отзыв</Button>
                    </Col>
                    <div>
                        {reviews.length > 2 && !allReviews ?
                            <>
                                {reviews.splice(0, 2).map((el, i) => <WatchReview key={i} el={el} product={product} setProduct={setProduct} setReviews={setReviews} params={params} />)}
                                <Button style={allReviewsSt} onClick={allReviewsHandler}>Все отзывы &gt;</Button>
                            </>
                            :
                            <>
                                {reviews.map((el, i) => <WatchReview key={i} el={el} product={product} setProduct={setProduct} setReviews={setReviews} params={params} />)}
                                {reviews.length > 2 ? <Button style={allReviewsSt} onClick={closeAllReviewsHandler}>Закрыть все отзывы &gt;</Button> : ""}
                            </>
                        }
                    </div>

                    {comment && <Reviews comment={comment} product={product} setComment={setComment} setReviews={setReviews} />}
                </Row>
            </Container>
        </>


    )
}
