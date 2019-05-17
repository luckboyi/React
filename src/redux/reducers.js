import counter from './reducers/count'
import msg from './reducers/getMsg'
export default function combineReducers( state = {}, action) {
  return {
    counter:counter(state.counter,action),
    msg:msg(state.msg,action)
  }
}