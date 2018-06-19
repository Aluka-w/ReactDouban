import React from 'react'
import NavMenu from "../components/NavMenu";
import TopMovie from "../components/TopMovie";
import MagicGap from "../components/MagicGap";
import fetchJsonp from 'fetch-jsonp'
import { Anchor, Carousel , Card} from 'antd'
import '../static/css/Home.scss'
const { Link } = Anchor
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      northList: [],
      northTitle: null,
      northDate: null
    }
  }
  componentWillMount () {
    // this.getNorthData()
  }
  getNorthData () {
    const url = `https://api.douban.com/v2/movie/us_box`
    fetchJsonp(url).then(response => response.json()).then(res => {
      console.log(res)
      this.setState ({
        northList: res.subjects,
        northTitle: res.title,
        northDate: res.date
      })
    })
  }
  onChange (a, b, c) {
    console.log(a, b, c)
  }
  northMovieRender () {
    let northList = this.state.northList,
    tempList = null
    tempList = northList.map(item => {
      return(
        <p key={item.rank}>
          <span>{item.rank}.&nbsp;</span>
          {item.subject.title}
        </p>
      )
    })
    return tempList
  }
  render () {
    const num = [0, 1, 2, 3, 4]
    const swingItem = num.map(item => {
      return (
        <div key={item}>
          <img src={require(`../static/images/movie${item}.jpg`)} alt="钢铁侠海报"/>
        </div>
      )
    })
    return (
      <div id="HomeMovieItem">
        <div className="leftItem">
          <a href="#swing" className="SowingMap anchor">
            <Carousel afterChange={this.onChange.bind(this)}>
              {swingItem}
            </Carousel>
          </a>
          <NavMenu></NavMenu>
          <MagicGap></MagicGap>
          <TopMovie></TopMovie>
        </div>
        <div className="rightItem" id="rightItem">
          <Anchor offsetTop={50} affix={false}>
            <Link href="#swing" title="轮播图" />
            <Link href="#s" title="即将上映" />
            <Link href="#c" title="TOP250" />
            <Link href="#b" title="北美票房榜" />
          </Anchor>
          <Card title={this.state.northTitle} bordered={false}
          className="card">
            <h4>
              <span>榜单日期:</span>
              <br/>
              <span>{this.state.northDate}</span>
            </h4>
            {this.northMovieRender()}
          </Card>
        </div>
      </div>
    )
  }
}
export default Home