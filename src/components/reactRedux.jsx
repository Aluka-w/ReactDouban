import { connect } from "react-redux";
import NavMenu from './NavMenu'
import MagicGap from './MagicGap'
import { getData } from "../redux/actions/action";
function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
    PubSubList: state.PubSubList
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    getMovieList: (title, wish_count, collect_count, dataList) => {
      console.log('mapDispatchToProps', title, wish_count, collect_count, dataList)
      dispatch(getData(title, wish_count, collect_count, dataList))
    }
  }
}

// Connected Component
export const MagicGapRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(MagicGap)
export const NavMenuRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu)