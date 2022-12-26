import React from "react";
import {Container, Row, Col, Figure} from "react-bootstrap";

export default ({user}) => {
    return (
        <Container className="pt-5">
            {user.name && <Row>
                <Col md={6}>
                    <h1>Профиль</h1>
                    <h2>{user.name}</h2>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                    <p>{user.about}</p>
                </Col>

                <Col md={6}>
                    <Figure>
                        <Figure.Image src={user.avatar}/>
                    </Figure>
                </Col>
            </Row>}
        </Container>
    )
}