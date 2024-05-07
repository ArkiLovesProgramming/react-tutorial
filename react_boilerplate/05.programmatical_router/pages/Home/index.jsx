import { Component } from "react";
import "./index.css"
import Message from "./Message";
import { Redirect, Route, NavLink, Switch } from "react-router-dom";

export default class Home extends Component{

    toGo = (page)=>{
        const {history} = this.props
        return ()=>{
            history.push("/home/"+page)
        }
    }

    render(){
        return (
            <div>
                <div className="home">
                <h2>I am home component</h2>
                <ul>
                    <li onClick={this.toGo("news")}>
                        <span>News</span>
                    </li>
                    <li onClick={this.toGo("messages")}>
                        <span>Messages</span>
                    </li>
                </ul>
                </div>
                <Switch>
                    <Route path="/home/messages" component={Message}/>
                    <Route path="/home/news"/>
                    <Redirect to="/home/messages"/>
                </Switch>
            </div>
        )
    }
}