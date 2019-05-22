import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/loginAction";

const initialState = {
    loginIn: false,
    loginError: null,
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
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loginIn: false,
                loginError: action.payload
            }
        default:
            return state;
    }
}

export default loginReducer;