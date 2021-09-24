import { createStore, applyMiddleware } from 'redux';
import CountReducer from './count-reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
export default createStore(CountReducer, composeWithDevTools(applyMiddleware(thunk)))