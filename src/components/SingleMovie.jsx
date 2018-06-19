// 电影封面组件
import React from 'react'
import { Rate } from 'antd'
import LazyLoad from 'react-lazyload'
import '../static/css/SingleMovie.scss'
class SingleMovie extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movieItem: this.props.movieItem
    }
  }
  goToMovie (id) {
    console.log('电影id', id)
    // this.props.history.push(`/movie/${id}`)
  }
  render () {
    const movieItem = this.props.movieItem
    // console.log('单',movieItem)
    if(movieItem) {
      return (
        <div className="SingleMovieItem" onClick={()=>this.goToMovie(movieItem.id)}>
          <LazyLoad height={174}>
            <img src={movieItem.images.small} alt={movieItem.alt}/>
          </LazyLoad>
          {/* <span>{this.filterTitle.bind(this, '哆啦A梦:大雄萨达')}</span> */}
          <span>{movieItem.title}</span>
          <div className="movieStar">
            <Rate disabled defaultValue={movieItem.rating.average} style={{fontSize: 12}}/>
            <span>{movieItem.rating.average}</span>
          </div>
        </div>
      )
    }else {
      return (
        <div>
          没有
        </div>
      )
    }
  }
}
export default SingleMovie