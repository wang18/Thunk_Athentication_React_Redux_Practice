import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=mimi123';

export function login(data){
    return dispatch => {
        return axios.get(`${ROOT_URL}${API_KEY}`);
    }
}