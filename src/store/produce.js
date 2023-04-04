import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE';

// reducer
export default function produceReducer(state = {}, action){
  console.log('firing produceReducer for action: ' + action.type);
  switch (action.type) {
    case POPULATE:
      const newState = {}
      for (const produce of action.produce) {
        newState[produce.id] = produce;
      }
      
      return newState;

    default:
      return state

  }
}
// action creator
export function populateProduce() {
  console.log('creating action POPULATE');
  
  return {
    type: POPULATE,
    produce: produceData
  }
}