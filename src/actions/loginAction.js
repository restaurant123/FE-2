import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';



export const loginAction = (credentials) => dispatch => {
    dispatch({type: LOGIN_START});
    return axios
        .post('https://restaurant-passport2019.herokuapp.com/users/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            //console.log(res.data.id, console.log(res.data.token));
            dispatch({type: LOGIN_SUCCESS, payload: res.data.token})}
        )
        .catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: err})
        });
};