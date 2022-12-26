import React from "react";
import Logo from "../Logo"
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg"
import {ReactComponent as CartIcon} from "./img/ic-cart.svg"
import {ReactComponent as ProfileIcon} from "./img/ic-profile.svg"
import { Nav, Navbar, Form, Button } from "react-bootstrap"
import "./style.css";
import { ChevronRight } from "react-bootstrap-icons"


// export default () => {
//     return (
//     <>
//         <div className="mainWrapper">
//             <div className="container">
//                 <Navbar className="mainHeader">
//                     <Navbar.Brand><Logo /></Navbar.Brand>
//                     <Form.Control type="search" placeholder="Поиск" className="mainSearch"></Form.Control>
//                     <Nav.Link href=""><FavIcon /></Nav.Link>
//                     <Nav.Link href=""><CartIcon /></Nav.Link>
//                     <Nav.Link href=""><ProfileIcon /></Nav.Link>
//                 </Navbar>
//                 <div className="headerContent">
//                     <div className="headerInfo">
//                         <h1 className="headerTitle">Крафтовые лакомства для собак</h1>
//                         <p className="headerText">Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
//                         <Button variant="light" className="mainHeaderBtn">Каталог
//                         <ChevronRight className="btnArrow"/></Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//     )
// } 
