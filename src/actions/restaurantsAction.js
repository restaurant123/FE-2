import AxiosWithAuth from '../utils/AxiosWithAuth'




/**********************************************************************************/
/*                      Fetch all restaurants and update store                    */
/**********************************************************************************/

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


/*********************************************************************************/
/*                  Update which restaurant is being selected                    */
/*********************************************************************************/
export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';

export const selectRestaurantAction = (id) => dispatch => {
    dispatch({type: SELECT_RESTAURANT, payload: id});
}



/********************************************************************************/
/*                      Increment/Decrement number of visits                    */
/********************************************************************************/
export const INCREMENT_VISITS = 'INCREMENT_VISITS';

export const incrementVisits = (id) => {
    return ({type:INCREMENT_VISITS, payload: id})
}

export const DECREMENT_VISITS = 'DECREMENT_VISITS';

export const decrementVisits = (id) => {
    return ({type:DECREMENT_VISITS, payload: id})
}

/********************************************************************************/
/*                      Update Restaurant with user changes                     */
/********************************************************************************/
export const UPDATE_RESTAURANT = "UPDATE_RESTAURANT";

export const updateRestaurantAction = (restaurant) => dispatch => {
    dispatch({type: UPDATE_RESTAURANT, payload: restaurant})
}

/********************************************************************************/
/*               Update Take out and Delivery Filtering status                   */
/********************************************************************************/

export const TAKEOUT = "TAKEOUT";
export const DELIVERY = "DELIVERY";
export const RESET = "RESET";



export const updateFilterAction = (filter) => dispatch => {
    console.log('filter: ', filter)
    switch (filter) {
        case 'takeout':
            dispatch({type:TAKEOUT});
            break;
        case 'delivery':
            dispatch({type: DELIVERY});
            break;
        case 'reset':
            dispatch({type: RESET});
            break;
        default:
            return;
    }
}


/********************************************************************************/
/*                      Update Selected Restaurant status                       */
/********************************************************************************/
export const RESTAURANT_IS_NOT_SELECTED = 'RESTAURANT_IS_NOT_SELECTED'

export const unselectRestaurantAction = () => dispatch => {
    dispatch({type: RESTAURANT_IS_NOT_SELECTED})
}
