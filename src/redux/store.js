// import { createStore, combineReducers } from "redux"
// // import { connect } from "react-redux";
// // import App from '../App'
// // state
// let appState = {
//   cart: [
//     {
//       product: 'bread 700g',
//       quantity: 2,
//       unitCost: 90
//     },
//     {
//       product: 'milk 500ml',
//       quantity: 1,
//       unitCost: 47
//     }
//   ]
// }
// // reducer
// const productsReducer = function(state=[], action) {
//   return state;
// }
// const cartReducer = (state=appState, action) => {
//   switch (action.type) {
//     case 'ADD_CART':
//       return {
//         cart: [...state.cart, action.payload]
//       }
//     case 'DELETE_CART':
//       return {
//         cart: [...state.cart, action.payload]
//       }
//     default:
//       return state;
//   }
// }
// const addToCart = (product, quantity, unitCost) => {
//   return {
//     type: 'ADD_CART',
//     payload: {
//       product,
//       quantity,
//       unitCost
//     }
//   }
// }
// const allReducer = {
//   productsReducer,
//   cartReducer
// }
// const rootReducer = combineReducers(allReducer)
// // store
// const store = createStore(rootReducer)
// console.log('改变之前', store.getState())
// const bb = store.subscribe(()=> {
//   console.log('改变之hou', store.getState())
// })
// store.dispatch(addToCart('Coffee 500gm', 1, 250))
// store.dispatch(addToCart('Flour 1kg', 2, 110))
// store.dispatch(addToCart('Juice 2L', 1, 250))
// bb()

// export default store



import { createStore } from "redux";
import rootReducer from './reducers';

let store = createStore(rootReducer);

export default store;