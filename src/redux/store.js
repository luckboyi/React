import {createStore, applyMiddleware} from 'redux'
import combineReducers from './reducers'
import thunkMiddleware from 'redux-thunk'
let store = createStore(combineReducers,applyMiddleware(thunkMiddleware))
export default store