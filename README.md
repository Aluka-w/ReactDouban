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

 