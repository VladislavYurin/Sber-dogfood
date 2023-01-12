import React, { useState, useContext } from "react";
import "./setReview.css"
import { Form, Button, Col, Row, Figure } from "react-bootstrap"
import { Context } from "../../App"

export default ({ comment, product, setComment, setReviews }) => {
    const { api } = useContext(Context);
    const [text, setText] = useState("")
    const [rate, setRate] = useState()
    const [name, setName] = useState(() => {
        return product.name.length > 20
            ?
            product.name.slice(0, 20) + "..."
            :
            product.name
    })

    const handler = (e) => {
        e.preventDefault()
        let obj = {
            rating: rate,
            text: text
        }
        api.setReviews(product._id, obj)
            .then(res => res.json())
            .then(data => {
                setComment(false)
            })
    }


    return <div className={comment ? "popupBox active" : "popupBox"}>
        <div className="popup">
            <Row>
                <Col md={8} xs={8} className="h3">Отзыв к товару «{name}»</Col>
                <Col md={4} xs={4}>
                    <Figure>
                        <Figure.Image src={product.pictures} className="productPicture" />
                    </Figure>
                </Col>
            </Row>
            <Form onSubmit={handler}>
                <div className="rating">
                    <div className="range">
                        <Form.Label className="labelInfo">Оцените товар</Form.Label>
                        <Form.Control
                            className="formRange"
                            type="range"
                            min={1}
                            max={5}
                            step={1}
                            onChange={(e) => setRate(e.target.value)} />
                    </div>
                    <div className="ratingNumber">{rate}</div>
                </div>
                <Form.Label className="labelInfo">Расскажите о товаре</Form.Label>
                <Form.Control as="textarea" style={{ resize: "none" }} onChange={e => setText(e.target.value)} rows={5} />
                <div className="commentBtns">
                    <Button onClick={e => setComment(false)} variant="light" className="btn cansel" >Отменить</Button>
                    <Button type="submit" className="btn" variant="warning">Отправить</Button>
                </div>
            </Form>

        </div>
    </div>
}