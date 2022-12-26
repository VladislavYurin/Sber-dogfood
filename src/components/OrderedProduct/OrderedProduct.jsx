import React, { useState, useEffect } from "react";

import { Trash3 } from "react-bootstrap-icons"
import { Table, ButtonGroup, Button } from "react-bootstrap";

import Local from "../../Local";
import "./style.css"


export default ({name, price, pictures, discount, amount, setCart, setTotalPrice, setTotalDiscount, setResultPrice}) => {

    const tableStyle = {
        textAlign: "center"
    }

    const imgStyle = {
        backgroundImage: `url(${pictures})`
    };

    const [productPrice, setProductPrice] = useState(price)
    const [cnt, setCnt] = useState(amount)


    let productsInCart = Local.getItem("cart", true)

    // Получение товара в количестве 1 шт с ценой за 1 шт при обновлении страницы

    useEffect(() => {
        let refreshCart = productsInCart.map((el) => {
            el.amount = 1;
            return el
        })
        setCart(refreshCart)
        setCnt(1)
    }, [])

    // Обновление итоговой цены при изменении количества одного товара, а также цены самого товара

    useEffect(() => {
        setProductPrice(price * amount)
        
        let newPrice = productsInCart.reduce((acc, el) =>  acc + (el.price * el.amount), 0)
        setTotalPrice(newPrice)
        let discount =  productsInCart.reduce((acc, el) => acc + ((el.price * ((100 - el.discount)/100)) * el.amount), -newPrice)
        setTotalDiscount(Math.trunc(discount))
        setResultPrice(Math.ceil(newPrice + discount))
    }, [productsInCart])

    // Удаление товара из корзины

    const delProduct = () => {
        let newCart = productsInCart.filter((el) => el.name !== name)
        setCart(newCart)
        let newPrice = newCart.reduce((acc, el) =>  acc + (el.price * el.amount), 0)
        setTotalPrice(newPrice)
        let discount =  newCart.reduce((acc, el) => acc + ((el.price * ((100 - el.discount)/100)) * el.amount), -newPrice)
        setTotalDiscount(Math.trunc(discount))
        setResultPrice(Math.ceil(newPrice + discount))
    }

    // Увеличение количества товара

    const increaseProduct = () => {
        setCnt(cnt + 1)
        setCart(() => {
            let newCart = productsInCart.map((el) => {
                if (el.name === name) {
                    el.amount += 1
                }
                return el
                })
            return newCart
        })
        
    }

      // Уменьшение количества товара

    const decreaseProduct = () => {
        setCart(() => {
            setCnt(cnt - 1)
            let newCart = productsInCart.map((el) => {
                if (el.name === name) {
                    el.amount -= 1
                }
                return el
                })
            return newCart
        })
    }

    return (
        <>
     <Table>
        <tbody>
            <tr style={tableStyle}>
                <th style={{width: "300px"}}>
                    <div className="orederdProductInfo">
                        <div>
                            <div className="card__img" style={imgStyle}></div>
                        </div>
                        <div> 
                            <div className="card__text">{name}</div>
                        </div>
                    </div>
                </th>
                <td style={{width: "100px"}}> 
                    <ButtonGroup>
                        <Button size="sm" variant="light" disabled={cnt === 1}
                                onClick={decreaseProduct}>-</Button>

                        <Button size="sm" variant="light" disabled>{cnt}</Button>

                        <Button size="sm" variant="light"
                                onClick={increaseProduct}>+</Button>
                    </ButtonGroup>
                </td>
                <td style={{width: "100px"}}>  
                    
                    {!discount 
                    ? 
                    <span>{productPrice} ₽</span> 
                    : 
                    <>
                        <small><del>{productPrice} ₽</del></small>
                        <div>
                            <strong className= "text-danger">{Math.ceil(productPrice * ((100 - discount)/100))} ₽</strong>
                        </div>
                    </>
                    }
                    
                </td>
                <td style={{width: "100px"}}>
                    <button style={{cursor: "pointer", border: "none", backgroundColor: "transparent"}} onClick={delProduct}><Trash3/></button>
                </td>
            </tr>
          
        </tbody>
    </Table>
    </>
    )
}