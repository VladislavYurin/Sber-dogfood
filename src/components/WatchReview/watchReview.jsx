import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Context } from "../../App";
import "./watchReview.css"
import { useEffect } from "react";

export default ({ el, product, setReviews, setProduct, params }) => {

    const { api, user } = useContext(Context);

    const [rating, setRating] = useState(() => {
        let rate = ""
        for (let i = 1; i <= el.rating; i++) {
            rate += "★"
        }
        return rate
    })

    const avatarStyle = {
        backgroundImage: `url(${el.author.avatar})`,
        width: "50px",
        height: "50px"
    };

    const delHandler = (e) => {
        e.preventDefault();
        {
            confirm("Вы уверены, что хотите удалить свой комментарий?") && api.delReview(product._id, el._id)
                .then(res => res.json())
                .then(data => {
                    setProduct(data)
                })

        }

    }

    useEffect(() => {
        api.getReviews(params.id)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [product])

    return <>
        <Table borderless>
            <tbody>
                <tr>
                    <th>
                        <div className="commentator">
                            <div>
                                <div className="avatar" style={avatarStyle}></div>
                            </div>
                            <div>
                                <div className="text">{el.author.name}</div>
                            </div>
                        </div>
                    </th>
                    <td className="ratingStyle">{rating}</td>
                    {user.name === el.author.name && <td className="delReview">
                        <Link to={""} onClick={delHandler}>Удалить</Link>
                    </td>}
                </tr>
                <tr>
                    <th></th>
                    <td>
                        <div className="commentary">Комментарий:</div>
                        {el.text}
                    </td>
                </tr>
            </tbody>

        </Table>
        <hr />
    </>
}