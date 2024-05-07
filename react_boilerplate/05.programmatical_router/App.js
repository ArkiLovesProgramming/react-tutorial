import './App.css';
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navi from './components/Navi';
import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render(){
    return (
      <div className='app'>
        <Header></Header>
        <div className='content'>
          <Navi></Navi>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            {/* 如果这里加个这个，二级路由的跳转也不影响到一级页面的 route 上，感觉vue 应该也是这样的设计
            vue 上是 route 下的 index 加上页面的 view 是一个整体 */}
            {/* <Route path="/home/messages" component={Navi}/> */}
            {/* 所有剩下的请求都去 home */}
            <Redirect to="/home"/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
