import React, {useState, useContext} from "react";
import {Context} from "../../App"
import {Link, useNavigate} from "react-router-dom";

import Logo from "../Logo";
import {BoxArrowInRight, BoxArrowLeft, PlusCircle} from "react-bootstrap-icons"
import "./style.css";
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg"
import {ReactComponent as CartIcon} from "./img/ic-cart.svg"
import {ReactComponent as ProfileIcon} from "./img/ic-profile.svg"

export default ({openPopup, user, setToken, setUser, likes, cart}) => {

    const nav = useNavigate();

    const {searchText, search, setProducts, goods} = useContext(Context);

    const handler = e => {
        search(e.target.value);
        const result = goods.filter((el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1));
        // console.log(result);
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
    {/* <> </> ---> пустой родительский тег <React.Fragment></React.Fragment> */}
        <header>
            <Logo/>
            <input type="search" value={searchText} onChange = {handler}/>
            <nav>
               
                {user && <Link to={'/favorites'}><a href=""><FavIcon/><span>{likes}</span></a></Link>}
                {user && <Link to="/add"><PlusCircle/></Link>}
                {user && <Link to={'/cart'}><a href=""><CartIcon/><span>{cart}</span></a></Link>}
                {user && <Link to="/profile"><ProfileIcon/></Link>}
                {user && <a href="" onClick={logout}><BoxArrowLeft/></a>}
                {!user && <a href="" onClick={e => {e.preventDefault(); openPopup(true)}}><BoxArrowInRight style={{fontSize: "2rem"}}/></a>}
            </nav>
        </header>
       
    </> 
}