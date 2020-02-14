import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';


console.log('reducer in store');
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

