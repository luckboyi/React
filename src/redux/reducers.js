import counter from './reducers/count'
export default function combineReducers( state = {}, action) {
  return {
    counter:counter(state.counter,action),
  }
}