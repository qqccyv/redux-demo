import { createStore, applyMiddleware } from 'redux';
import CountReducer from './count-reducer'
import thunk from 'redux-thunk'
export default createStore(CountReducer, applyMiddleware(thunk))