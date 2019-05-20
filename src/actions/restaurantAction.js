import AxiosWithAuth from '../utils/AxiosWithAuth'

export const RESTAURANT_FETCH_START = 'RESTAURANT_FETCH_START';
export const RESTAURANT_FETCH_SUCCESS = 'RESTAURANT_FETCH_SUCCESS';
export const RESTAURANT_FETCH_FAILURE = 'RESTAURANT_FETCH_FAILURE';

const baseURL = 'http://localhost:5000/';


export const getRestaurantsAction = () => dispatch => {
    dispatch({type: RESTAURANT_FETCH_START});
    AxiosWithAuth()
        .get(`${baseURL}/restaurants`)
        .then(res => {console.log(res); dispatch({type: RESTAURANT_FETCH_SUCCESS, payload: res})})
        .catch(err => dispatch({type: RESTAURANT_FETCH_FAILURE, payload: err}))
}