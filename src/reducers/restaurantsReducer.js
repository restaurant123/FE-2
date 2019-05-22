import {RESTAURANT_FETCH_START, RESTAURANT_FETCH_SUCCESS, RESTAURANT_FETCH_FAILURE} from '../actions/restaurantsAction'
import { DELETE_RESTAURANT_START, DELETE_RESTAURANT_SUCCESS, DELETE_RESTAURANT_FAILURE } from "../actions/restaurantsAction";
const initialState = {
    restaurants: [],
    fetchingRestaurants: false,
    fetchingError: null,
    localDeleting: false,
    localDeleteError: null
}



const restaurantsReducer = (state=initialState, action) => {


 
    switch(action.type) {

        // Fetching all restaurants to store
        case RESTAURANT_FETCH_START:
            return({...state, fetchingRestaurants: true});

        case RESTAURANT_FETCH_SUCCESS:
            return({...state, restaurants: action.payload, fetchingRestaurants: false, error: null });

        case RESTAURANT_FETCH_FAILURE:
            return({...state, fetchingRestaurants: false, fetchingError: action.payload });

        case DELETE_RESTAURANT_START: 
        return {
            ...state,
            deleting: true
        }

        case DELETE_RESTAURANT_SUCCESS:
            return {
                ...state,
                deleting: false,
                deleteError: null,
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload.id)
            }

        case DELETE_RESTAURANT_FAILURE:
            return {
                ...state,
                deleting: false,
                deleteError: action.payload
            }

        default:
        return state;
    }
    
}

export default restaurantsReducer;