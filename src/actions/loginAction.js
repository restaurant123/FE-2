import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';



export const loginAction = (credentials) => dispatch => {
    dispatch({type: LOGIN_START});
    return axios
        .post('https://restaurant-passport2019.herokuapp.com/users/login', credentials)
        .then(res => {
            console.log(res); 
            localStorage.setItem('token', res.data.payload)
            dispatch({type: LOGIN_SUCCESS})}
        )
        .catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: err})
        });
};