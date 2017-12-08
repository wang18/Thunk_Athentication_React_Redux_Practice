import axios from 'axios';
import {SET_CURRENT_USER, LOG_OUT} from './type_constants';
import _ from 'lodash';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=mimi123';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function login(data){
    return dispatch => {
        return axios.get(`${ROOT_URL}${API_KEY}`).then(res =>{
            const ind = _.findIndex(res.data, {
                'title': data.title,
                'categories': data.categories
            });
            if(ind!=-1){
                dispatch(setCurrentUser(data));
            }
        } );
    };
}

export function logoutUser() {
    return {
        type: LOG_OUT

    }
}
export function logout() {
    return dispatch => {
        return dispatch(logoutUser());
    };
}