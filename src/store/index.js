import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const createAppStore = (defaultState) =>{
    return createStoreWithMiddleware(reducer, defaultState);
}

export default createAppStore;