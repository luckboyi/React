import counter from './reducers/count'
import userInfo from './reducers/userInfo'
export default function combineReducers( state = {}, action) {
  return {
    counter:counter(state.counter,action),
    userInfo:userInfo(state.userInfo,action)
  }
}