import React, {Component} from "react"
import Item from "../Item"
import "./index.css"

export default class List extends Component{

    render(){
        const {todos, checkItem, deleteItem} = this.props
        return (
            <div className="List">
                {
                    todos.map(todo=>{
                        return <Item deleteItem={deleteItem} checkItem={checkItem} key={todo.id} todo={todo}/>
                    })
                }
            </div>
        )
    }
}