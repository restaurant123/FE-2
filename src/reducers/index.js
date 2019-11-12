import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registeringReducer from './registeringReducer';
import restaurantsReducer from './restaurantsReducer';


export default combineReducers({
        login: loginReducer,
        registering: registeringReducer,
        restaurants: restaurantsReducer,
    }
)

