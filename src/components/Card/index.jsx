import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../App"
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import "./style.css";
import Local from "../../Local";
import Api from "../../Api";

const Card = ({ name, price, pictures, _id, likes, setFav, setCart }) => {

    const { api, products } = useContext(Context);

    let [like, setLike] = useState(false);

    const imgStyle = {
        backgroundImage: `url(${pictures})`
    };

    useEffect(() => {
        let id = Local.getItem("u", true)._id;
        // console.log(id);
        if (likes.includes(id)) {
            setLike(true);
        }
    }, [])


    const likeHandler = e => {
        e.stopPropagation();
        e.preventDefault();
        setLike(!like);
        api.setLike(_id, !like)
            .then(res => res.json())
            .then(data => {
                console.log(data, like)
                if (!like) {
                    setFav(prev => { return [...prev, data] })
                } else {
                    setFav(prev => prev.filter(el => el._id !== _id))
                }
                console.log(data);
            })
    }

    const cartHandler = e => {
        e.preventDefault();
        products.map((el, i) => {
            el.amount = 1;
            if (el._id === _id) {
                setCart(prev => {
                    let res = prev.some((prevEl) => {
                        return prevEl._id === _id
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

    return (
        <Link to={`/product/${_id}`} className="cardsLink">
            <div className="card caruselCard">
                <div className="card__img" style={imgStyle}></div>
                <div className="card__price">{price} ₽</div>
                <div className="card__text">{name}</div>
                <Button className="btn" variant="warning" onClick={cartHandler}>В корзину</Button>
                <span className="card__like"
                    onClick={likeHandler}>
                    {like ? <HeartFill /> : <Heart />}
                </span>
            </div>
        </Link>
    )
}

export default Card;