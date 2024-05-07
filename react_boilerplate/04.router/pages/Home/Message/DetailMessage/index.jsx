import React, {Component} from "react"
import qs from "query-string"

// 模拟从数据库里取数据
let data = [
    {id: 1, name: "name1", content: "hahahahha"},
    {id: 2, name: "name2", content: "xixixiix"},
    {id: 3, name: "name3", content: "dasdasd"},
]

export default class DetailMessage extends Component{
    render(){
        let id
        // debugger
        //  1. 路由组件处理 params 参数
        //  用的多
        if ("id" in this.props.match.params){
            id = parseInt(this.props.match.params.id)
        //  2. 路由组件处理 search(qeury) 参数
        } else if (this.props.location.search !== ""){
            id = this.props.location.search
            id = qs.parse(id).id
        //  3. 路由组件处理 state 参数
        //  这种方法，路径不会显示，刷新也不会丢失，要记住这个
        } else {
            if (this.props.location.state != undefined && "id" in this.props.location.state){
                id = this.props.location.state.id
            } else {
                id = 1
            }
        }
        let name, content
        data.forEach((item)=>{
            if (id === item.id){
                name = item.name
                content = item.content
                return
            }
        })
        return (
            <div>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>content: {content}</p>
            </div>
        )
    }
}