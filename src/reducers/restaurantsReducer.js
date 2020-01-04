import {RESTAURANT_FETCH_START, RESTAURANT_FETCH_SUCCESS, RESTAURANT_FETCH_FAILURE,
        INCREMENT_VISITS, DECREMENT_VISITS, SELECT_RESTAURANT, UPDATE_RESTAURANT
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
        /*                                      Update List of Restaurants                                  */
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
                    restaurant => restaurant.id === state.restaurant.id?
                    {...restaurant, visited: ++state.restaurant.visited}:restaurant)
            }
        }

        case DECREMENT_VISITS: {
            return {
                ...state,
                restaurants: state.restaurants.map(
                    restaurant => restaurant.id === state.restaurant.id?
                        {...restaurant, visited: --state.restaurant.visited} : restaurant)
            }
        }

        /*****************************************************************************************************/
        /*                                      Update Restaurant with user changes                          */
        /*****************************************************************************************************/

        case UPDATE_RESTAURANT: {
            console.log('in update_restaurant_reducer: ', action.payload)
            return (
                {
                    ...state,
                    restaurants: state.restaurants.map((restaurant) => 
                        restaurant.id===action.payload.id?
                            action.payload : restaurant
                    ),
                    restaurant: action.payload

                }
            )
        }
            
        default:
        return state;
    }
    
}
 
export default restaurantsReducer;