import React from "react";
import "./Header.css"

import imagePath from "../assets/imgs/titlis-swiss-alps-4k.jpg"
import Input from "./Input";

export default function Header(props){
    return(
        <div className="header">
            <h1>Todo</h1>
            <Input onEnter={props.onEnter}/>
            <img src={imagePath} alt="landscape" className="background-image"/>
            <div className="image">
            </div>
        </div>
    )
}