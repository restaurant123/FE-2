import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import registeringReducer from './registeringReducer'
import restaurantReducer from './restaurantReducer'

export default combineReducers({
        login: loginReducer,
        registering: registeringReducer,
        restaurant: restaurantReducer
    }
)

