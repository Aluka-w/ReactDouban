# React包
1. `import ReactDOM from 'react-dom'`  index.js的渲染根组件: ReactDom.render

2. `import React, { Component } from 'react'` 类的继承自react: class test extends Component

3. `import { hot } from 'react-hot-loader'` 热更新

4. `import { BrowserRouter as Router, Route, Link } from 'react-router-dom'` 路由

5. Redux 和 react-redux


#Yarn包管理工具
1. 类比npm, 速度快, facebook推出

2. 版本控制, 保证package.json的里面的包版本都是一致的

3. 语法: 

		(1) yarn init
		
		(2)	yarn add [package]@[version]
		
		(3) yarn remove [package]
		
		(4) yarn / yarn install

		(5) yarn upgrade [package]@[version]

		##配置热更新
			参考: https://github.com/gaearon/react-hot-loader
		#配置 scss
			参考: https://www.cnblogs.com/yangrenmu/p/7118398.html
	
# React-router-dom的用法
## react-router和react-router-dom的区别

			(1) react-router-dom中的Route.js和Router.js，都是直接导入的react-router中的Route.js和Router.js。
			(2) react-router提供的是路由的基本功能
			(3) react-router-dom根据在浏览器运行时路由的特征，在react-router之上做了一层封装，提供了HashRouter、BrowserRouter等在web端常用的路由。如果是在web端使用的话，package.json中直接引入react-router-dom就可以

## 用法
1. 引入 BrowserRouter as Router, Route, Link

2. Router标签包裹所有组件, 保证所有组件可以使用路由跳转
		(1) 注意: Router标签只允许有一个子节点

3. Route标签设置路由规则 和 对应的组件页面
		(1) 例子: `<Route path="/" component={home}>`

4. Link设置跳转
		(1) 例子: `<Link to="/"> 首页 </Link>`

# 项目中引入Ant-design

1. 安装 babel-plugin-import插件

2. .babelrc文件配置
			(1) "plugins": [
						"react-hot-loader/babel",
						["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  				]
3. 按需引入即可
			(1) import { DatePicker } from 'antd'; 
			(2) babel-plugin-import插件会把 js 和 css都加载进来 

# 豆瓣API
 1. 参考: https://developers.douban.com/wiki/?title=api_v2

# 发送请求
## Axios (比较熟悉)
## fetch

1. 替代原来的XHR, 或者Ajax, 基于ES6封装的Promise对象

2. 没法解决跨域的问题

3. 解决跨域: 
		(1) fetch-jsonp
		(2) 参考: https://blog.csdn.net/liu942626/article/details/79317837

# 图片懒加载
1. 参考: https://blog.csdn.net/xiaoxiao23333/article/details/62459549/

# 引入Echarts.js

# 事件订阅的方式去获取数据
pubsub-js

# redux 和react-redux
1. redux下的一个库: react-redux

2. redux
	(0) https://segmentfault.com/a/1190000012976767

	(1) react , redux , react-redux的关系图解参考: https://segmentfault.com/a/1190000011473973

	(2) 例子参考: https://segmentfault.com/a/1190000011474522

	(3) 参考: https://www.cnblogs.com/bax-life/p/8440326.html

3. 核心概念
	(重要)流程: store -> dispatch(派发) -> action -> reducer
						初始数据 -> store.dispatch(action) -> switch case 派发任务

	(核心)Redux的核心由三部分组成：Store, Action, Reducer。
			(1) Store : 是个对象，贯穿你整个应用的数据都应该存储在这里。

			(2) Action： 是个对象，必须包含type这个属性，reducer将根据这个属性值来对store进行相应的处理。除此之外的属性，就是进行这个操作需要的数据。

			(3) Reducer: 是个函数。接受两个参数：要修改的数据(state) 和 action对象。根据action.type来决定采用的操作，对state进行修改，最后返回新的state。

4. 理解:
  (1) react的context属性: 当放入某个状态, 它的所有子孙组件们可以直接访问

