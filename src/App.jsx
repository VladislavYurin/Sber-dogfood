import React, { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

// import {Container, Row, Col} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Favorites from "./components/Favorites"
import Cart from "./pages/Cart";


import Api from "./Api.js"

import Main from "./pages/Main"
import Profile from "./pages/Profile"
import AddProduct from "./pages/AddProduct";
import Catalog from "./pages/catalog"
import Product from "./pages/product"
import Single from "./pages/Single"

import Local from "./Local.js"

const footerToBottom = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
}

const Context = React.createContext({});

const App = () => {
    const [data, setData] = useState([]);
    const [goods, setGoods] = useState([]);
    const [token, setToken] = useState(Local.getItem("shopUser"));
    const [user, setUser] = useState(Local.getItem("u", true))
    const [popupActive, changePopupActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [fav, setFav] = useState([]);
    const [cart, setCart] = useState(() => {
        let data = Local.getItem("cart", true);
        return data || [];
    });



    const [products, setProducts] = useState([]);
    const [searchText, search] = useState("");

    useEffect(() => {
        // console.log("user is changed");
        setApi(new Api(token));
    }, [token])
    
    

    // useEffect(() => {

    //     fetch("https://api.react-learning.ru/products",
    //         {
    //             headers: {
    //                 "Authorization": `Bearer ${token}`
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             setGoods(data.products);
    //             setData(data.products);
    //         });
    // }, []);

    useEffect(() => {
        Local.setItem("cart", cart, true)
    }, [cart])
    
    
    useEffect(() => {
        if (token) {
        api.getProducts()
            .then(res => res.json())
            .then(data => {
                setGoods(data.products);
                setData(data.products);
                Local.setItem("goods", data.products, true)
            })
        api.showProfile()
            .then(res => res.json())
            .then(data => {
                // console.log("User", data);
            })
        } else {
            setGoods([]);
            setData([]);
        }
    }, [api])

    useEffect(() => {
        const f = goods.filter(el => el.likes.includes(user._id))
        // console.log(f);
        setFav(f);
        setProducts(goods);
    }, [goods])

    return <Context.Provider value={{
        goods: goods,
        setGoods: setGoods,
        products: products, //фильтрация поиска
        searchText: searchText,
        setProducts: setProducts, //фильтрация поиска
        search: search,
        api: api,
        setApi: setApi,
        user: user
    }}>
        <div className="wrapper" style={footerToBottom}>
            <div className="top" style={{flexGrow: 1}}>
                <Header 
                openPopup = {changePopupActive} 
                user={!!token} 
                setToken={setToken} 
                api={api}
                setUser={setUser}
                likes={fav.length}
                cart={cart.length}/>
                
                

                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/add" element={<AddProduct/>}/>
                    <Route path="/catalog" element={ <Catalog setFav={setFav} setCart={setCart}/> }/>
                    {/* <Route path="/product/:id" element= {<Product/>}/> */}
                    <Route path="/product/:id" element= {<Single/>}/>
                    <Route path="/profile" element= {<Profile user={user}/>}/>
                    <Route path="/favorites" element={<Favorites fav={fav}/>}/>
                    <Route path="/cart" element={<Cart cart={cart}  setCart={setCart}/>}/>
                
                </Routes>
            </div>
            <Footer />
        </div>
        { !token && <Modal 
        isActive={popupActive} 
        changeActive={changePopupActive} 
        setToken={setToken}  
        setUser={setUser}/>}
    </Context.Provider>
}

export {App, Context};