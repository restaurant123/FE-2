import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import restaurantsReducer from './restaurantsReducer';


export default combineReducers({
        login: loginReducer,
        restaurants: restaurantsReducer,
    }
)

