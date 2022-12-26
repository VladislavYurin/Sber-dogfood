import React, { useState, useContext } from "react";
import "./setReview.css"
import { Form, Button, Col, Row, Figure } from "react-bootstrap"
import { Context } from "../../App"

export default ({ comment, product, setComment }) => {
    const {api} = useContext(Context);
    const [text, setText] = useState({})
    const [name, setName] = useState(() => {
        return product.name.length > 20 
        ?  
        product.name.slice(0, 20) + "..." 
        :  
        product.name
    })

    const handler = (e) => {
        e.preventDefault()
        console.log(text)
        api.setReviews(product._id, text)
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return <div className={comment ? "popupBox active" : "popupBox"}>
        <div className="popup">
            <Row>
                <Col md={8} xs={8} className="h3">Отзыв к товару «{name}»</Col>
                <Col md={4} xs={4}>
                    <Figure>
                        <Figure.Image src={product.pictures} className="productPicture"/>
                    </Figure>
                </Col>
            </Row>
            <Form onSubmit={handler}>
                <Form.Label className="textareaLabel">Расскажите о товаре</Form.Label>
                <Form.Control as="textarea" style={{ resize: "none" }} onChange={e => setText({text: e.target.value})} rows={5} />
            <div className="commentBtns">
                <Button onClick={e => setComment(false)} variant="light" className="btn cansel" >Отменить</Button>
                <Button type="submit" className="btn" variant="warning">Отправить</Button>
            </div>
            </Form>
          
        </div>
    </div>
}