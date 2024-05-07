import React, {Component} from "react"
import "./index.css"

export default class Item extends Component{

    render(){
        const {todo, checkItem, deleteItem} = this.props
        return (
            <div className="item">
                <input type="checkbox" onChange={(e)=>{checkItem(todo.id, e.target.checked)}} checked={todo.done}/>
                <span>&nbsp;{todo.name}</span>
                <button onClick={(e)=>{deleteItem(todo.id)}}>Delete</button>
            </div>
        )
    }
}