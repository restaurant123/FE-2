import {RESTAURANT_FETCH_START, RESTAURANT_FETCH_SUCCESS, RESTAURANT_FETCH_FAILURE,
        INCREMENT_VISITS, DECREMENT_VISITS, SELECT_RESTAURANT
        } from '../actions/restaurantsAction';

const initialState = {
    restaurants: [],
    fetchingRestaurants: false,
    fetchingError: null,
    localDeleting: false,
    localDeleteError: null,

    restaurant: {}
}

const restaurantsReducer = (state=initialState, action) => {


 
    switch(action.type) {

        /*****************************************************************************************************/
        /*                                      Update List of Restauarants                                  */
        /*****************************************************************************************************/
        case RESTAURANT_FETCH_START:
            return({...state, fetchingRestaurants: true});

        case RESTAURANT_FETCH_SUCCESS:
            return({...state, restaurants: action.payload, fetchingRestaurants: false, error: null });

        case RESTAURANT_FETCH_FAILURE:
            return({...state, fetchingRestaurants: false, fetchingError: action.payload });


        /*****************************************************************************************************/
        /*                                      Update Single Restaurant Selection                           */
        /*****************************************************************************************************/

        case SELECT_RESTAURANT: {
            return {
                ...state,
                restaurant: state.restaurants.find(restaurant => restaurant.id === action.payload)
            }
        }

        /*****************************************************************************************************/
        /*                                      Update Number of visits                                      */
        /*****************************************************************************************************/
        case INCREMENT_VISITS: {
            return {
                ...state,
                restaurants: state.restaurants.map(
                    restaurant => restaurant.id === action.payload?
                    {...restaurant, visited: restaurant.visited + 1}:restaurant),
                restaurant: {...state.restaurant, visited: state.restaurant.visited + 1}
            }
        }

        case DECREMENT_VISITS: {
            return {
                ...state,
                restaurants: state.restaurants.map(
                    restaurant => restaurant.id === action.payload?
                        {...restaurant, visited: restaurant.visited - 1} : restaurant),
                restaurant: {...state.restaurant, visited: state.restaurant.visited - 1}
            }
        }
            
        default:
        return state;
    }
    
}
 
export default restaurantsReducer;