import React, {Component} from "react"
import "./index.css"

export default class Footer extends Component{ 
    render(){
        const {todos, deleteAll, checkAll} = this.props
        const doneNum = todos.reduce((pre, currntItem)=>{
            if (currntItem.done){
                return pre+1
            } else {
                return pre
            }
        }, 0)
        return (
            <div className="footer">
                <input type="checkbox" onChange={(e)=>{checkAll(e.target.checked)}}/>
                <span>&nbsp;Finished {doneNum}/{todos.length}</span>
                <button onClick={()=>{deleteAll()}}>Delete all</button>
            </div>
        )
    }
}