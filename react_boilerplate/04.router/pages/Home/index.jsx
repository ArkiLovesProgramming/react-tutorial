import { Component } from "react";
import "./index.css"
import Message from "./Message";
import { Redirect, Route, NavLink, Switch } from "react-router-dom";

export default class Home extends Component{
    render(){
        return (
            <div>
                <div className="home">
                <h2>I am home component</h2>
                <ul>
                    <li>
                        <NavLink activeClassName="active" to="/home/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/home/messages">Messages</NavLink>
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