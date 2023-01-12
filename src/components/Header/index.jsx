import React, { useState, useContext } from "react";
import { Context } from "../../App"
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import Logo from "../Logo";
import { BoxArrowInRight, BoxArrowLeft, PlusCircle } from "react-bootstrap-icons"
import "./style.css";
import { ReactComponent as FavIcon } from "./img/ic-favorites.svg"
import { ReactComponent as CartIcon } from "./img/ic-cart.svg"
import { ReactComponent as ProfileIcon } from "./img/ic-profile.svg"

export default ({ openPopup, user, setToken, setUser, likes, cart }) => {

    const nav = useNavigate();

    const { searchText, search, setProducts, goods } = useContext(Context);

    const handler = e => {
        search(e.target.value);
        const result = goods.filter((el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1));
        setProducts(result);
    }

    const logout = e => {
        e.preventDefault;
        localStorage.removeItem("shopUser");
        localStorage.removeItem("u")
        setToken(false);
        setUser({});
        nav("/");
    }

    return <>
        <Navbar style={{ backgroundColor: "var(--main-color)" }} expand="lg">
            <Container className="header">
                <Navbar.Brand className="brand" href=""><Logo /></Navbar.Brand>
                <input type="search" value={searchText} onChange={handler} />
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">
                                {user && <Link to={'/favorites'}><a className="navLinks" href=""><FavIcon /><span>{likes}</span></a></Link>}
                            </Nav.Link>
                            <Nav.Link href="">
                                {user && <Link to="/add"><PlusCircle /></Link>}
                            </Nav.Link>
                            <Nav.Link href="">
                                {user && <Link to={'/cart'}><a className="navLinks" href=""><CartIcon /><span>{cart.reduce((acc, el) => acc + el.amount, 0)}</span></a></Link>}
                            </Nav.Link>
                            <Nav.Link href="">
                                {user && <Link to="/profile"><ProfileIcon /></Link>}
                            </Nav.Link>
                            <Nav.Link href="">
                                {user && <a className="navLinks" href="" onClick={logout}><BoxArrowLeft /></a>}
                            </Nav.Link>
                            <Nav.Link href="">
                                {!user && <a className="navLinks" href="" onClick={e => { e.preventDefault(); openPopup(true) }}><BoxArrowInRight style={{ fontSize: "2rem" }} /></a>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>

    </>
}