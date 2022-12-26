import React from "react";
import Logo from "../Logo";
import "./style.css";

export default () => {
    return <footer>
        <Logo/>
        <span className="copy">&copy;{new Date().getFullYear()} DogFood.ru</span>
        <a href="">Каталог</a>
        <a href="">Акции</a>
        <a href="">Новости</a>
        <a href="">Отзывы</a>
        <a href="">Оплата и доставка</a>
        <a href="">Часто спрашивают</a>
        <a href="">Обратная связь</a>
        <a href="">Контакты</a>
        <div className="contacts">
            <p className="contactsLinks">Мы на связи</p>
            <div>
            <a href="tel:+71234567890">+7(123)456-78-90</a>
            </div>
            <div>
            <a href="mailto: dogfood@gmail.com">dogfood@gmail.com</a>
            </div>
            <nav>
                <a href=""><i className="fa-brands fa-vk"></i></a>
                <a href=""><i className="fa-brands fa-odnoklassniki"></i></a>
                <a href=""><i className="fa-brands fa-telegram"></i></a>
            </nav>
        </div>
    </footer>
}

