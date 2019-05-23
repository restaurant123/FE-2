import AxiosWithAuth from '../utils/AxiosWithAuth'

export const SINGLE_RESTAURANT_FETCH_START = 'SINGLE_RESTAURANT_FETCH_START';
export const SINGLE_RESTAURANT_FETCH_SUCCESS = 'SINGLE_RESTAURANT_FETCH_SUCCESS';
export const SINGLE_RESTAURANT_FETCH_FAILURE = 'SINGLE_RESTAURANT_FETCH_FAILURE';



export const getRestaurantAction = (id) => dispatch => {
    dispatch({type: SINGLE_RESTAURANT_FETCH_START});
    return AxiosWithAuth()
        .get(`https://restaurant-passport2019.herokuapp.com/restaurants/${id}`)
        .then(res => dispatch({type: SINGLE_RESTAURANT_FETCH_SUCCESS, payload: {restaurant:res.data, visited: res.data.visited}}))
        .catch(err => dispatch({type: SINGLE_RESTAURANT_FETCH_FAILURE, payload: err}))
}

// export const INCREMENT_VISITS = 'INCREMENT_VISITS';

// export const incrementVisits = () => dispatch =>  {
//     dispatch ({type:INCREMENT_VISITS})
// }


// export const DECREMENT_VISITS = 'DECREMENT_VISITS';

// export const decrementVisits = () => dispatch =>  {
//     dispatch ({type:DECREMENT_VISITS})
// }

