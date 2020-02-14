import {createStore} from 'redux';
import reducer from './reducer';


console.log('reducer in store');
const store = createStore(reducer);

export default store;

