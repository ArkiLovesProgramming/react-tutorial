import { Component } from "react";
import "./index.css"
import { withRouter } from 'react-router-dom'

class Navi extends Component{

    // 使用 withRouter，让通用组件也具有路由组件的 props，这样就可以用编程式路由方法
    toGo = (page)=>{
        const {history} = this.props
        return ()=>{
            history.push("/"+page)
        }
    }

    render(){
        return (
            <div className="navi">
                <ul>
                    <li onClick={this.toGo("home")}>
                        <span>Home</span>
                    </li>
                    <li onClick={this.toGo("about")}>
                        <span>About</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Navi)