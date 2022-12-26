import React from "react";
import Card from "../Card";
import "./style.css"

export default ({fav}) => {
    return (
       <div className="favorites cards-container">
       {fav.length == 0 ? "Нет избранных товаров" : fav.map((d,i) => <Card 
        key={i}
        {...d}
        name={d.name.length > 20 ? d.name.slice(0,20) + "..." : d.name}/> )}
    
       </div> 
    )
}