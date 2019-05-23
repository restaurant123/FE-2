import axios from 'axios'

export const REGISTERING_START = 'REGISTERING_START';
export const REGISTERING_SUCCESS = 'REGISTERING_SUCCESS';
export const REGISTERING_FAILURE = 'REGISTERING_FAILURE';

export const registeringAction = (newUser) => dispatch =>  {
    dispatch({type: REGISTERING_START});
    console.log(newUser);
    return axios
        .post('https://restaurant-passport2019.herokuapp.com/users/register', newUser)
        .then(res => {
            console.log(res); 
            localStorage.setItem('token', res.data.token)
            dispatch({type: REGISTERING_SUCCESS, payload: res})}
        )
        .catch(err => {
            dispatch({type: REGISTERING_FAILURE, payload: err})
        });

    
}