import AxiosWithAuth from '../utils/AxiosWithAuth'

export const RESTAURANT_FETCH_START = 'RESTAURANT_FETCH_START';
export const RESTAURANT_FETCH_SUCCESS = 'RESTAURANT_FETCH_SUCCESS';
export const RESTAURANT_FETCH_FAILURE = 'RESTAURANT_FETCH_FAILURE';



export const getRestaurantsAction = () => dispatch => {
    dispatch({type: RESTAURANT_FETCH_START});
    AxiosWithAuth()
        .get('https://restaurant-passport2019.herokuapp.com/restaurants')
        .then(res => {console.log(res); dispatch({type: RESTAURANT_FETCH_SUCCESS, payload: res.data})})
        .catch(err => dispatch({type: RESTAURANT_FETCH_FAILURE, payload: err}))
}