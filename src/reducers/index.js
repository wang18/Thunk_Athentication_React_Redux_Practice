import {combineReducers} from 'redux';
import flashMessages from './flashMessages';
import {reducer as formReducer} from 'redux-form';
const RootReducer = combineReducers({
    flashMessages,
    form: formReducer
});

export default RootReducer;