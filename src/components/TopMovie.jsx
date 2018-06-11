import React from 'react'
import SingleMovie from './SingleMovie'
import '../static/css/TopMovie.scss'
class TopMovie extends React.Component {
  render () {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const listItem = num.map((item) => {
      return (
        <div key={item}>
          <SingleMovie></SingleMovie>       
        </div>
      )
    })
    return (
      <div className="TopMovie">
        <div className="TopMovieWord">
          <h2>TOP250</h2>
          <span>查看全部 &nbsp; >></span>
        </div>
        <div className="TopMovieList">
          {listItem}
        </div>
      </div>
    )
  }
}
export default TopMovie