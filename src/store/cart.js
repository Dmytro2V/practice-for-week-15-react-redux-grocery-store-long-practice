const ADD_TO_CART_ON_ID = '/produce/ADD_TO_CART_ON_ID'
// action creator
export const addToCartOnId = id =>{
  console.log('creating action ADD_TOCART_ON_ID');
  return { //action
    type: ADD_TO_CART_ON_ID,
    payload: id
  }
}

export default function cardReducer(state = {}, action) {
  console.log('firing cartReducer for action: ' + action.type);
  console.log('state is', state, 'state produce = ', state.produce);
  switch (action.type) {
    case ADD_TO_CART_ON_ID:
      const newCartState = {...state.cart}
      const id = action.payload     
    
      if (!state.cart || !state.cart[id]) newCartState[id] ={id, count:1}
      else         newCartState[id].count += 1;
      
      const newState = {...state, cart: newCartState}
      return newState;
      
    default: 
      return state
  }
}