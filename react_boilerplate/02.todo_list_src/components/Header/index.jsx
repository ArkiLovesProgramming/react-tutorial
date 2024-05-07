import React, {Component} from "react"
import "./index.css"
import { nanoid } from 'nanoid'

export default class Header extends Component{

    comfirmInput = ()=>{
        const {giveData} = this.props
        return (e)=>{
            if (e.keyCode === 13){
                const value = e.target.value
                const data = {id: nanoid(), name: value, done: false}
                giveData(data)
                e.target.value = ""
            }
        }
    }
    render(){
        return (
            <div>
                <img src="/react.png" alt="ico" style={{width: "50px"}} />
                <h2 style={{margin: "15px 0px"}}>To do</h2>
                <div className="input">
                    <input onKeyUp={this.comfirmInput()} type="text" placeholder="Enter in your name, confirm it by enter"/>
                </div>
            </div>
        )
    }
}