import React from "react";
import logo from "./img/logo.svg";
import {Link} from "react-router-dom";

export default () => {
    return <Link className="logo" to="/">
        <img src={logo} alt="Dog Food" />
    </Link>
}
