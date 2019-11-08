import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, IN_LOGIN_PAGE, OUT_LOGIN_PAGE, LOGOUT } from "../actions/loginAction";
import { REGISTERING_START, REGISTERING_SUCCESS, REGISTERING_FAILURE } from "../actions/registeringAction";;

const initialState = {
    loginIn: false,
    loginError: null,
    loggedIn: false,
    newUser: null,
    registering: false,
    error: null,
    inLoginPage: false
    
}

const loginReducer = (state=initialState, action) => {
    switch(action.type) {

        case LOGIN_START: 
        return {
            ...state,
            loginIn: true
        }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loginIn: false,
                loginError: null,
                loggedIn: true
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loginIn: false,
                loggedIn: false,
                loginError: action.payload
            }

        case IN_LOGIN_PAGE:
            return {
                ...state,
                inLoginPage:true
            }
        
        case OUT_LOGIN_PAGE:
            return {
                ...state,
                inLoginPage: false
            }

        case LOGOUT:
            return {
                ...state,
                loggedIn: false
            }

        case REGISTERING_START: 
        return {
            ...state,
            registering: true
        }

        case REGISTERING_SUCCESS:
            return {
                ...state,
                newUser: null,
                registering: false,
                error: null,
                loggedIn: true
            }

        case REGISTERING_FAILURE:
            return {
                ...state,
                newUser: null,
                registering: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default loginReducer;