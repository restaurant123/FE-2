import {SINGLE_RESTAURANT_FETCH_START, SINGLE_RESTAURANT_FETCH_SUCCESS, SINGLE_RESTAURANT_FETCH_FAILURE
        } from '../actions/restaurantAction'

        // INCREMENT_VISITS, DECREMENT_VISITS

const initialState = {
    restaurant:null,
    fetchingSinglrRestaurant: false,
    error: null,
    visited: 0
}

const restaurantReducer = (state=initialState, action) => {
    switch(action.type) {
        case SINGLE_RESTAURANT_FETCH_START:
            return({...state, fetchingSingleRestaurant: true});

        case SINGLE_RESTAURANT_FETCH_SUCCESS:
            return({restaurant: action.payload.restaurant, 
                    fetchingSingleRestaurant: false, 
                    error: null,
                    visited: action.payload.visited});

        case SINGLE_RESTAURANT_FETCH_FAILURE:
                return({...state, fetchingSingleRestaurant: false, error: action.payload });

        // case INCREMENT_VISITS:
        //     return {
        //         ...state,
        //         visited: ++state.visited
        //     }

        // case DECREMENT_VISITS:
        // return {
        //     ...state,
        //     visited: --state.visited
        // }

        default:
        return state;
    }
    
}

export default restaurantReducer;