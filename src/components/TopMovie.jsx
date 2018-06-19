import React from 'react'
import SingleMovie from './SingleMovie'
import fetchJsonp from "fetch-jsonp"
import '../static/css/TopMovie.scss'
class TopMovie extends React.Component {
  // https://api.douban.com/v2/movie/top250
  constructor (props) {
    super(props)
    this.state = {
      topMovieList: []
    }
    this.getTopMovieData = this.getTopMovieData.bind(this)
    this.topMovieRender = this.topMovieRender.bind(this)
  }
  componentWillMount () {
    // this.getTopMovieData()
  }
  getTopMovieData () {
    const url = `https://api.douban.com/v2/movie/top250`
    fetchJsonp(url).then((response) => response.json()).then(res => {
      this.setState({
        topMovieList: res.subjects
      })
    }).catch(err => console.log(err))
  }
  topMovieRender () {
    let topMovieList = this.state.topMovieList,
    tempList = null
    tempList = topMovieList.map( item => {
      return (
        <div key={item.id} className="imgItem">
          <SingleMovie
            movieItem={item}
          />
        </div>
      )
    })
    return tempList
  }
  render () {
    return (
      <div className="TopMovie">
        <div className="TopMovieWord">
          <h2>TOP250</h2>
          <span>查看全部 &nbsp; >></span>
        </div>
        <div className="TopMovieList">
          {this.topMovieRender()}
        </div>
      </div>
    )
  }
}
export default TopMovie