import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const IN_LOGIN_PAGE = 'IN_LOGIN_PAGE';
export const OUT_LOGIN_PAGE = 'OUT_LOGIN_PAGE';




export const loginAction = (credentials) => dispatch => {
    dispatch({type: LOGIN_START});
    return axios
        .post('https://restaurant-passport2019.herokuapp.com/users/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({type: LOGIN_SUCCESS, payload: res.data.token})
            }
        )
        .catch(err => {
            window.alert("Login failed.Please try again...");
            dispatch({type: LOGIN_FAILURE, payload: err})
        });
};

export const inLoginPageAction = () => dispatch => {
    dispatch({type: IN_LOGIN_PAGE})
}

export const outLoginPageAction = () => dispatch => {
    dispatch({type: OUT_LOGIN_PAGE})
}


export const LOGOUT = 'LOGOUT'
export const logout = () => dispatch => {
    localStorage.clear('token');
    dispatch({type:LOGOUT});

}