import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Layout, Menu, Affix, Input, BackTop} from 'antd'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Movie from './pages/Movie.jsx'
import './static/css/App.scss'
const { Header, Content, Footer } = Layout // 解构赋值
const Search = Input.Search

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
        <Header>
          <div className="logo"><Link to="/" className="logoLink"></Link></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/movie">电影</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
          <Affix style={{position: 'absolute', right: 40, top: 15}}>
            <Search
              placeholder="输入您需要搜索的电影"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
              className="searchBar"
            />
          </Affix>
        </Header>
        <Content style={{ padding: '0 30px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 1785 }}>
            <Route path="/" exact component={Home}></Route>
            <Route path="/movie" component={Movie}></Route>
            <Route path="/about" component={About}></Route>
          </div>
          <BackTop />
        </Content>
        <Footer style={{ textAlign: 'center', padding: 15}}>
          豆瓣Demo ©2018 Created by bin.wang
        </Footer>
        </Layout>
      </Router>
    );
  }
}

export default hot(module)(App);
