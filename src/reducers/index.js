import { combineReducers } from 'redux';
import incrementCountReducer from './CounterReducer';

const rootReducer = combineReducers({incrementCountReducer});

export default rootReducer;
