import React, { useState } from "react";
import "./Main.css"

import ListItem from "./ListItem";
import Header from "./Header";

export default function Main(props){
    const [list, setList] = useState([])

    const handleAddTask = taskDescription => {
        let newList = [...list]
        newList.push({
            id: list.length++,
            description: taskDescription,
            done: false
        })
        setList(newList)
    }

    const handleTaskChange = (id, checked) =>{
        let newList = [...list]
        for(let i in newList){
            if(newList[i].id === id){
                newList[i].checked = checked
            }
        }
        setList(newList)
    }

    const handleTaskDelete = (id) => {
        let newList = list.filter((item) => item.id !== id)
        setList(newList)
    }

    return (
        <React.Fragment>
            <Header onEnter={handleAddTask}/>
            <div className="content">
                {list.map((item, index)=>(
                    <ListItem key={index} 
                        id={item.id} description={item.description}
                        checked={item.checked} onChange={handleTaskChange}
                        onRemove={handleTaskDelete}/>
                ))}
            </div>
        </React.Fragment>
    )
}