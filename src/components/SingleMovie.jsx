import React from 'react'
import { Rate } from 'antd'
import '../static/css/SingleMovie.scss'
class SingleMovie extends React.Component {
  filterTitle (word) {
    console.log(word)
    // if(word.length > 5) {
    //   word = word.substring(0,4) + '...'
    // }
    // return word
  }
  render () {
    return (
      <div id="SingleMovie">
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516825103.webp" alt="图片实例"/>
        {/* <span>{this.filterTitle.bind(this, '哆啦A梦:大雄萨达')}</span> */}
        <span>哆啦A梦:大雄萨达</span>
        <div className="movieStar">
          <Rate disabled defaultValue={2} style={{fontSize: 12}}/>
          <span>6.8</span>
        </div>
      </div>
    )
  }
}
export default SingleMovie