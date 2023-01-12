import React, { useState, useContext } from "react";
import {Context} from "../../App"
import { Form, Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Local from "../../Local"

export default ({ isActive, changeActive, setToken, setUser }) => {
    const {api} = useContext(Context);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const handler = e => {
        e.preventDefault();
        api.logIn({ "email": email, "password": pwd })
            .then(res => res.json())
            .then(data => {
                Local.setItem("shopUser", data.token);
                Local.setItem("u", data.data, true);
                setToken(data.token);
                setUser(data.data)
                setEmail("");
                setPwd("");
                changeActive(false); 
            })
    }

    return <div className={isActive ? "popupBox active" : "popupBox"}>
        <div className="popup">
            <XCircle className="popupClose" onClick={e => { changeActive(false) }} />
            <Form onSubmit={handler}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={pwd}
                        onChange={e => setPwd(e.target.value)}
                    />
                </Form.Group>
                <Button variant="warning" type="submit">Войти</Button>
            </Form>
        </div>
    </div>
}