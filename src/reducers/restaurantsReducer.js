import {RESTAURANT_FETCH_START, RESTAURANT_FETCH_SUCCESS, RESTAURANT_FETCH_FAILURE,
        // DELETE_RESTAURANT_START, DELETE_RESTAURANT_SUCCESS, DELETE_RESTAURANT_FAILURE,
        INCREMENT_VISITS, DECREMENT_VISITS
        } from '../actions/restaurantsAction';

const initialState = {
    restaurants: [],
    fetchingRestaurants: false,
    fetchingError: null,
    localDeleting: false,
    localDeleteError: null,

    restaurant: {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        description: '',
        summary: '',
        takeout: '',
        delivery: '',
        openHour: '',
        closeHour: '',
        openDay: '',
        closeDay: '',
        visited: '',
    }
}

const restaurantsReducer = (state=initialState, action) => {


 
    switch(action.type) {

        // Fetching all restaurants
        case RESTAURANT_FETCH_START:
            return({...state, fetchingRestaurants: true});

        case RESTAURANT_FETCH_SUCCESS:
            return({...state, restaurants: action.payload, fetchingRestaurants: false, error: null });

        case RESTAURANT_FETCH_FAILURE:
            return({...state, fetchingRestaurants: false, fetchingError: action.payload });

        //Delete a single restaurant
        // case DELETE_RESTAURANT_START: 
        // return {
        //     ...state,
        //     deleting: true
        // }

        // case DELETE_RESTAURANT_SUCCESS:
        //     return {
        //         ...state,
        //         deleting: false,
        //         deleteError: null,
        //         restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload.id)
        //     }

        // case DELETE_RESTAURANT_FAILURE:
        //     return {
        //         ...state,
        //         deleting: false,
        //         deleteError: action.payload
        //     }
        //update numnber of visits of a restaurant
        case INCREMENT_VISITS: {
            console.log('increment visits reducer started with id:', action.payload);
            return {
                ...state,
                restaurants: state.restaurants.map( restaurant =>
                    restaurant.id === action.payload? 
                    {...restaurant, visited: ++restaurant.visited} : restaurant)
            }
        }

        case DECREMENT_VISITS: {
            console.log('decrement visits reducer started with id:', action.payload);
            return {
                ...state,
                restaurants: state.restaurants.map( restaurant =>
                    restaurant.id === action.payload? 
                    {...restaurant, visited: --restaurant.visited} : restaurant)
            }
        }
            
        
        default:
        return state;
    }
    
}

export default restaurantsReducer;