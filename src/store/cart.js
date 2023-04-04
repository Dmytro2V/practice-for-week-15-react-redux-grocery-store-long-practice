const ADD_TO_CART = '/produce/ADD_TO_CART'
// action creator
const addToCart = id =>{
  return { //action
    type: ADD_TO_CART,
    payload: id
  }
}

export default function cardReducer(state = {}, action) {
  console.log('firing cartReducer for action: ' + action.type);
  switch (action.type) {
    case ADD_TO_CART:
      const newState = {}
      const id = action.payload
      let product = {}
      if (state.product) product = state.product[id]
      if (state[id]) newState[id].count += 1
      if (!state[id] ) newState[id].count = 1      

      return newState
    default: 
      return state
  }
}