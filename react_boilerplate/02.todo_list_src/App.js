import './App.css';
import { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import List from "./components/List"


class App extends Component {
  state = {
      todos: [
          {id: "001", name: "Laughing", done: true},
          {id: "002", name: "Sleeping", done: false},
          {id: "003", name: "Happy", done: true}
      ]
  }

  componentDidMount(){
    this.setState({todos: JSON.parse(localStorage.getItem("todos"))})
  }

  //在 vue 中我们有 watch 去做这个，这里可以用 componentDidUpdate，效果类似
  componentDidUpdate(prevProps, prevState){
    if (prevState.todos !== this.state.todos){
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }
  }

  receiveData = (todo)=>{
    let {todos} = this.state
    todos = [todo, ...todos]
    console.log(todos)
    this.setState({todos})
  }

  checkItem = (id, checked)=>{
    let {todos} = this.state
    todos = todos.map((item)=>{
      if (item.id === id){
        return {...item, done: checked}
      } else {
        return item
      }
    })
    this.setState({todos})
  }

  checkAll = (checked)=>{
    let {todos} = this.state
    todos = todos.map((item)=>{
      return {...item, done: checked}
    })
    this.setState({todos})
  }

  deleteItem = (id)=>{
    let {todos} = this.state
    todos = todos.filter((item)=>{
      if (item.id !== id){
        return true
      } else {
        return false
      }
    })
    this.setState({todos})
  }

  deleteAll = ()=>{
    this.setState({todos:[]})
  }

  render(){
    const {todos} = this.state
    const {receiveData, checkItem, deleteItem, deleteAll, checkAll} = this
    return (
      <div className="App">
        <Header giveData={receiveData}/>
        <List deleteItem={deleteItem} checkItem={checkItem} todos={todos}/>
        <Footer checkAll={checkAll} deleteAll={deleteAll} todos={todos}/>
      </div>
    )
  }
}

export default App;
