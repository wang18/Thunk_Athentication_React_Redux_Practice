import {combineReducers} from 'redux';
import flashMessages from './flashMessages'

const RootReducer = combineReducers({
    flashMessages
});

export default RootReducer;