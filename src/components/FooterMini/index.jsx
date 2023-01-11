import React from "react";
import { Link } from "react-router-dom"
import { House, Stack } from "react-bootstrap-icons";
import { ReactComponent as FavIcon } from "../Header/img/ic-favorites.svg";
import { ReactComponent as CartIcon } from "../Header/img/ic-cart.svg";
import { ReactComponent as ProfileIcon } from "../Header/img/ic-profile.svg";
import "./style.css";


export default ({ user, favLength, cart }) => {
    return (
        <div className="wrapper__footer__mini">
            <div className="contact" >
                <h2>Мы всегда на связи</h2>
                <h3>8 (999) 00-00-00</h3>
                <a href="">dogfood.ru@gmail.com</a>
                <div className="icon__contact">
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-viber"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-vk"></i>
                </div>
                <span style={{ marginBottom: "60px" }}><br />© "Интернет-магазин натуральных лакомств для собак dogfood.ru"</span>
            </div>
            <nav className="footer__nav">
                <Link to="/" className="column__direction">
                    <House />
                    <span>Главная</span>
                </Link>
                <Link to="/catalog" className="column__direction">
                    <Stack />
                    <span>Каталог</span>
                </Link>
                {user && <div className="row__direction" >
                    <Link to="/cart" className="column__direction">
                        <CartIcon />
                        <span>Корзина</span>
                    </Link>
                    <div className="note">{cart.reduce((acc, el) => acc + el.amount, 0)}</div>
                </div>}
                {user && <div className="row__direction">
                    <Link to="/favorites" className="column__direction">
                        <FavIcon />
                        <span>Избранное</span>
                    </Link>
                    <div className="note">{favLength}</div>
                </div>}
                {user && <Link to="/profile" className="column__direction">
                    <ProfileIcon />
                    <span>Профиль</span>
                </Link>}
            </nav>
        </div>
    )
}