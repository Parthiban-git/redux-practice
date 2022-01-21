import {createStore,combineReducers} from 'redux';
import Countreducer1 from '../reducers/count1';
import Countreducer2 from '../reducers/count2';

const store=()=>{
    const store=createStore(combineReducers({
        count1:Countreducer1,
        count2:Countreducer2
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return store;
}
export default store;