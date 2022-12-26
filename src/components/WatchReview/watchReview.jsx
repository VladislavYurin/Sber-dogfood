import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./watchReview.css"

export default ({ el }) => {

    const [rating, setRating] = useState(() => {
        let rate = ""
        for (let i = 0; i <= el.rating; i++) {
            rate += "★"
        }
        return rate
    })

    const avatarStyle = {
        backgroundImage: `url(${el.author.avatar})`,
        width: "50px",
        height: "50px"
    };

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