import React, { useState } from "react";
import "./Input.css"

export default function Input(props){
    const [inputText, setInput] = useState('')

    const handleKeyUp = e => {
        if(e.code === "Enter" && inputText !== ''){
            props.onEnter(inputText)
            setInput('')
        }
    }

    return(
        <div className="form">
            <input type="text" placeholder="O que vai fazer..."
                value={inputText}
                onChange={e => setInput(e.target.value)}
                onKeyUp={handleKeyUp}/>
        </div>  
    )
}