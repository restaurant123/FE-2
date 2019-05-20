import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/loginAction";

const initialState = {
    loginIn: false,
    loginError: null
}

const reducer = (state=initialState, action) => {
    switch(action.type) {

        case LOGIN_START: 
        return {
            ...state,
            loginIn: true
        }

        case LOGIN_SUCCESS:
            return {
                loginIn: false,
                loginError: null
            }

        case LOGIN_FAILURE:
            return {
                loginIn: false,
                loginError: action.payload
            }
        default:
            return state;
    }
}

export default reducer;