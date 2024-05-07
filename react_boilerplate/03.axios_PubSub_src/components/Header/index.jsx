import React, {Component} from "react"
import "./index.css"
import PubSub from "pubsub-js"

export default class Header extends Component{

    search = (e)=>{
        if (e.keyCode === 13){
            PubSub.publish("search", this.input.value)
        }
    }

    render(){
        const {search} = this
        return (
            <div className="Header">
                <h1>Github users search</h1>
                <div className="input_box">
                    <button onClick={search}>Search</button>
                    <input ref={c => {this.input = c}} onKeyUp={search} type="text" placeholder="Type in the user name here" />
                </div>
            </div>
        )
    }
}