import AxiosWithAuth from '../utils/AxiosWithAuth'

export const SINGLE_RESTAURANT_FETCH_START = 'SINGLE_RESTAURANT_FETCH_START';
export const SINGLE_RESTAURANT_FETCH_SUCCESS = 'SINGLE_RESTAURANT_FETCH_SUCCESS';
export const SINGLE_RESTAURANT_FETCH_FAILURE = 'SINGLE_RESTAURANT_FETCH_FAILURE';



export const getRestaurantAction = (id) => dispatch => {
    dispatch({type: SINGLE_RESTAURANT_FETCH_START});
    AxiosWithAuth()
        .get(`https://restaurant-passport2019.herokuapp.com/restaurants/${id}`)
        .then(res => dispatch({type: SINGLE_RESTAURANT_FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: SINGLE_RESTAURANT_FETCH_FAILURE, payload: err}))
}