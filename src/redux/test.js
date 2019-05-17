import {increment,decrement,reset} from './actions/action'
import store from './store'
console.log(store.getState())

let unsubscribe = store.subscribe(() => 
console.log(store.getState()))

//发起一系列的action
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())
unsubscribe()