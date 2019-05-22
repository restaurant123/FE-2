import {SINGLE_RESTAURANT_FETCH_START, SINGLE_RESTAURANT_FETCH_SUCCESS, SINGLE_RESTAURANT_FETCH_FAILURE} from '../actions/restaurantAction'

const initialState = {
    restaurant:null,
    fetchingSinglrRestaurant: false,
    error: null 
}

const restaurantReducer = (state=initialState, action) => {
    switch(action.type) {
        case SINGLE_RESTAURANT_FETCH_START:
            return({...state, fetchingSingleRestaurant: true});

        case SINGLE_RESTAURANT_FETCH_SUCCESS:
            return({restaurant: action.payload, fetchingSingleRestaurant: false, error: null });

        case SINGLE_RESTAURANT_FETCH_FAILURE:
                return({...state, fetchingSingleRestaurant: false, error: action.payload });

        default:
        return state;
    }
    
}

export default restaurantReducer;