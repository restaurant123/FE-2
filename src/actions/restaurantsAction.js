import AxiosWithAuth from '../utils/AxiosWithAuth'

export const RESTAURANT_FETCH_START = 'RESTAURANT_FETCH_START';
export const RESTAURANT_FETCH_SUCCESS = 'RESTAURANT_FETCH_SUCCESS';
export const RESTAURANT_FETCH_FAILURE = 'RESTAURANT_FETCH_FAILURE';

export const getRestaurantsAction = () => dispatch => {
    dispatch({type: RESTAURANT_FETCH_START});
    AxiosWithAuth()
        .get('https://restaurant-passport2019.herokuapp.com/restaurants')
        .then(res => dispatch({type: RESTAURANT_FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: RESTAURANT_FETCH_FAILURE, payload: err}))
}


export const DELETE_RESTAURANT_START = 'DELETE_RESTAURANT_START';
export const DELETE_RESTAURANT_SUCCESS = 'DELETE_RESTAURANT_SUCCESS';
export const DELETE_RESTAURANT_FAILURE = 'DELETE_RESTAURANT_FAILURE';

export const deleteAction = (id) => dispatch => {
    dispatch({type: DELETE_RESTAURANT_START});
    return AxiosWithAuth()
        .delete(`https://restaurant-passport2019.herokuapp.com/restaurants/${id}`)
        .then(res => dispatch({type: DELETE_RESTAURANT_SUCCESS, payload: {res,id} }))
        .catch(err => {window.alert('PLease login first...');
            dispatch({type: DELETE_RESTAURANT_FAILURE, payload: err})})
}

export const INCREMENT_VISITS = 'INCREMENT_VISITS';

export const incrementVisits = (id) => {
    return ({type:INCREMENT_VISITS, payload: id})
}


export const DECREMENT_VISITS = 'DECREMENT_VISITS';

export const decrementVisits = (id) => {
    return ({type:DECREMENT_VISITS, payload: id})
}



