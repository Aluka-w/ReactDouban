// 热映电影组件
import React from 'react'
import SingleMovie from './SingleMovie'
import { Button, Carousel } from 'antd'
import '../static/css/Navmenu.scss'
class NavMenu extends React.Component {
  render () {
    const num = [0, 1, 2, 3, 4]
    const listItem = num.map((item) => {
      return (
        <div key={item}>
          <SingleMovie></SingleMovie>
          <Button type="primary" className="buyTicket">选座购票</Button>        
        </div>
      )
    })
    return (
      <div className="hotMovie">
        <div className="hotWord">
          <h2>正在热映</h2>
          <span>全部正在热映 &nbsp; >></span>
          <div className="hotNum">
            1 / 7
          </div>
        </div>
        {/* <Divider style={{marginTop: 10, marginBottom: 20}}/> */}
        <Carousel>
          <div className="navMenu">
            <div className="navItem">
              {listItem}
            </div>
          </div>
          <div className="navMenu">
            <div className="navItem">
              {listItem}
            </div>
          </div>
          <div className="navMenu">
            <div className="navItem">
              {listItem}
            </div>
          </div>
        </Carousel>
      </div>
    )
  }
}
export default NavMenu