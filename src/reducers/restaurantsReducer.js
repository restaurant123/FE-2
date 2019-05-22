import {RESTAURANT_FETCH_START, RESTAURANT_FETCH_SUCCESS, RESTAURANT_FETCH_FAILURE} from '../actions/restaurantsAction'

const initialState = {
    restaurants: [],
    fetchingRestaurants: false,
    error: null 
}

const restaurantsReducer = (state=initialState, action) => {
    switch(action.type) {
        case RESTAURANT_FETCH_START:
            return({...state, fetchingRestaurants: true});

        case RESTAURANT_FETCH_SUCCESS:
            return({restaurants: action.payload, fetchingRestaurants: false, error: null });

        case RESTAURANT_FETCH_FAILURE:
                return({...state, fetchingRestaurants: false, error: action.payload });

        default:
        return state;
    }
    
}

export default restaurantsReducer;