// 热映电影组件
import React from 'react'
import SingleMovie from './SingleMovie'
import fetchJsonp from 'fetch-jsonp';
import { Button, Carousel } from 'antd'
// import MockData from "../util/mock";
import '../static/css/Navmenu.scss'
class NavMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movieList: [],
      currentPage: 1
    }
    this.getMovieData = this.getMovieData.bind(this)
    this.renderLastItem = this.renderLastItem.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount () {
    this.getMovieData()
  }
  getMovieData () {
    let
    title = [],
    wish_count = [],
    collect_count = [],
    dataList = []
    // 获取正在上映的影片
    const url = `https://api.douban.com/v2/movie/in_theaters`
    fetchJsonp(url).then(response => {
        return response.json()
    }).then(res => {
      this.setState({
        movieList: res.subjects
      })
      res.subjects.slice(0,10).forEach(item => {
        let url = `https://api.douban.com/v2/movie/subject/${item.id}`
        fetchJsonp(url).then(response => { return response.json()}).then(res => {
          title.push(res.title)
          wish_count.push(res.wish_count)
          collect_count.push(res.collect_count)
          dataList.push({
            "value": res.wish_count,
            "name": res.title
          })
        })
      });
      // let {title, wish_count, collect_count, dataList} = MockData
      setTimeout(() => {
        this.props.getMovieList(title, wish_count, collect_count, dataList)
      }, 2000);
    }).catch(err => {
        console.log('---', err)
    })
  }
  onChange (val) {
    this.setState({
      currentPage: (val + 1)
    })
  }
  renderLastItem () {
    let 
    movieList = this.state.movieList,
    lastItem = []
    movieList = movieList.slice(0, 10) // 10
    for (let i = 0; i < 2; i++) {
      let tempList = []
      tempList = movieList.splice(0, 5)
      // console.log('单行数据', tempList)
      let listItem = tempList.map((item) => {
        return (
          <div key={item.id}>
            <SingleMovie
            movieItem={item}
            />
            <Button type="primary" className="buyTicket">选座购票</Button>        
          </div>
        )
      })
      lastItem.push((
        <div className="navMenu" key={i}>
          <div className="navItem">
            {listItem}
          </div>
        </div>
      ))
    }
    return lastItem
  }
  render () {
    return (
      <div className="hotMovie">
        <div className="hotWord">
          <h2>正在热映</h2>
          <span>全部正在热映 &nbsp; >></span>
          <div className="hotNum">
            {this.state.currentPage} / 2
          </div>
        </div>
        {/* <Divider style={{marginTop: 10, marginBottom: 20}}/> */}
        <Carousel afterChange={this.onChange}>
          {this.renderLastItem()}
        </Carousel>
      </div>
    )
  }
}
export default NavMenu