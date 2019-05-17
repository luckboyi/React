import {INCREMENT,DECREMENT,RESET} from '../actions/action'
//初始化state
const initState ={
  count:0
}
export default function reducer(state = initState,action){
  switch (action.type) {
    case INCREMENT:
      return {
        count:state.count +1
      }
      break;
    case DECREMENT:
      return {
        count:state.count -1
      }
      break;
    case RESET:
      return {
        count:0
      }
      break;
    default:
      return state
      break;
  }
}