import React, {Component} from "react"
import "./index.css"
import PubSub from "pubsub-js"
import axios from 'axios'

export default class List extends Component{

    componentDidMount(){
        PubSub.subscribe("search", this.search)
    }

    // 第一个参数是得到 topic 的名字，其实没什么用在这里，老师也说没有意义
    search = async (_, keyword)=>{
        await axios.get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res)=>{
            const {items} = res.data
            this.setState({items: items})
        }).catch((e)=>{
            console.log("error:"+e)
        })
    }

    state = {
        items: [
            // {id: "001", avatar_url: avatar, login: "arki", url: "http://www.baidu.com"},
            // {id: "002", avatar_url: avatar, login: "arkiarkiarkiarkiarkiarkiarki", url: "http://www.baidu.com"},
            // {id: "003", avatar_url: avatar, login: "arki", url: "http://www.baidu.com"},
            // {id: "004", avatar_url: avatar, login: "arkiarki", url: "http://www.baidu.com"},
            // {id: "005", avatar_url: avatar, login: "arkiarkiarkiarkiarki", url: "http://www.baidu.com"},
        ]
    }

    render(){
        const {items} = this.state
        return (
            <div className="list">
                {
                    items.map((item)=>{
                        return (
                            <a href={item.url} key={item.id} className="item">
                                <img src={item.avatar_url} alt="avatar" />
                                <span>{item.login}</span>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}