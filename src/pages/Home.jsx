import React from 'react'
import NavMenu from "../components/NavMenu";
import TopMovie from "../components/TopMovie";
import MagicGap from "../components/MagicGap";
import fetchJsonp from 'fetch-jsonp';
import { Anchor, Carousel , Card} from 'antd'
import '../static/css/Home.scss'
const { Link } = Anchor
class Home extends React.Component {
  onChange (a, b, c) {
    console.log(a, b, c)
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
          <Card title="北美票房榜" bordered={false}
          className="card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
    )
  }
}
export default Home