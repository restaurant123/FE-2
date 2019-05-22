import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import registeringReducer from './registeringReducer'
import restaurantsReducer from './restaurantsReducer'
import restaurantReducer from './restaurantReducer'

export default combineReducers({
        login: loginReducer,
        registering: registeringReducer,
        restaurants: restaurantsReducer,
        restaurant: restaurantReducer
    }
)

