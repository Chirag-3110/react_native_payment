import {combineReducers} from 'redux';

import userReducer from "./users/userReducer";
import CountReducer from "./counters/CounterReducer";

const rootreducer=combineReducers({
    counter:CountReducer,
    user:userReducer
})

export default rootreducer;