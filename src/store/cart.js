const ADD_TO_CART_ON_ID = '/produce/ADD_TO_CART_ON_ID'


export default function cardReducer(state = {}, action) {
  console.log('firing cartReducer for action: ' + action.type);
  console.log('state in cardReducer is', state);
  switch (action.type) {
    case ADD_TO_CART_ON_ID:
      const id = action.payload    
      const count = state[id]? state[id].count + 1: 1 
                 
      const newState = {...state, [id]:{id:id, count:count} }
      return newState;
      
    default: 
      return state
  }
}

// action creator
export const addToCartOnId = id =>{
  console.log('creating action ADD_TO_CART_ON_ID');
  return { //action
    type: ADD_TO_CART_ON_ID,
    payload: id
  }
}