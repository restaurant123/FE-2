// import { REGISTERING_START, REGISTERING_SUCCESS, REGISTERING_FAILURE } 
//     from "../actions/registeringAction";


// const initialState = {
//     newUser: null,
//     registering: false,
//     error: null
// }

// const registeringReducer = (state=initialState, action) => {
//     switch (action.type) {

//         case REGISTERING_START: 
//         return {
//             ...state,
//             registering: true
//         }

//         case REGISTERING_SUCCESS:
//             return {
//                 newUser: null,
//                 registering: false,
//                 error: null
//             }

//         case REGISTERING_FAILURE:
//             return {
//                 newUser: null,
//                 registering: false,
//                 error: action.payload
//             }

//         default:
//             return state
//     }
// }

// export default registeringReducer;