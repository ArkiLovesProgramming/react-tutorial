import { Component } from "react";
import { Link, Route, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DetailMessage from "./DetailMessage";

export default class Message extends Component{

    withState = ()=>{
        const history = useHistory()
        //注意一下使用 state 在编程式路由导航的方法就行了，其它俩个都很简单易懂
        history.push({ pathname: "/home/messages", state: { id: 1 } });
    }

    render(){
        return (
            <div>
                <ul>
                    {/* 一共有三种组件
                    1. 通用组件
                    2. 路由组件
                    3. 动态路由组件 */}
                    {/* 加了 replace 后就不会 push 进 history 的栈，就可以返回到真正的上一页 */}
                    {/* 在目前这种情况最适用，动态组件（需要传递参数展示页面数据的） */}
                    <li><Link replace={true} to={"/home/messages/1"}>message1</Link></li>
                    <li><Link replace={true} to={"/home/messages/2"}>message2</Link></li>
                    <li><Link replace={true} to={"/home/messages/3"}>message3</Link></li>
                </ul>
                <Route path="/home/messages/:id" component={DetailMessage}/>
                {/* <ul>
                    <li><Link to={"/home/messages?id=1"}>message1</Link></li>
                    <li><Link to={"/home/messages?id=2"}>message2</Link></li>
                    <li><Link to={"/home/messages?id=3"}>message3</Link></li>
                </ul>
                <Route path="/home/messages" component={DetailMessage}/> */}
                {/* <ul>
                    <li><Link to={{pathname: "/home/messages", state: {id: 1}}}>message1</Link></li>
                    <li><Link to={{pathname: "/home/messages", state: {id: 2}}}>message2</Link></li>
                    <li><Link to={{pathname: "/home/messages", state: {id: 3}}}>message3</Link></li>
                </ul>
                <Route path="/home/messages" component={DetailMessage}/> */}
            </div>
        )
    }
}