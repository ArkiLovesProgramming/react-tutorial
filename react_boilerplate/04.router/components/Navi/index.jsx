import { Component } from "react";
import "./index.css"
import { Link, NavLink } from 'react-router-dom'

export default class Navi extends Component{
    render(){
        return (
            <div className="navi">
                <ul>
                    <li>
                        <NavLink activeClassName="acitve" to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="acitve" to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}