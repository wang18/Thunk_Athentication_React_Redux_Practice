import axios from 'axios';
import _ from 'lodash';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=mimi123';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post(`${ROOT_URL}${API_KEY}`, userData);
    }
}

export function isUserExists(val) {
    return dispatch =>{
        return axios.get(`${ROOT_URL}${API_KEY}`);
    }
}