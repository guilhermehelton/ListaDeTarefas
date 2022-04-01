import React, { useState } from "react";
import "./ListItem.css"

export default function ListItem(props){
    const [isChecked, setChecked] = useState(props.checked)

    return(
        <div className="listItem">
            <label>
                <div className="check-wrapper">
                    <input type="checkbox"
                        checked={isChecked}
                        onChange={e => props.onChange(props.id, e.target.checked)}/>
                    <span className="check-hover"></span>
                </div>
                <span className={props.checked ? "input-text mark" : "input-text"}>{props.description}</span>
            </label>
            <button onClick={e => props.onRemove(props.id)}
                className="remove">
                <i class="fa-solid fa-xmark fa-xl"></i>
            </button>
        </div>
    )
}