
const initialState = {_id: null}
export const userReducer = (state=initialState, action) => {
    switch (action.type) {

        case 'signup':
            break
        case 'setCurrUser' || 'updateUser':
            return ({...state, ...action.payload})
        case 'updateUserLikesTrips':
            return ({...state, likes:[...action.payload.likes], trips:[...action.payload.trips]})
        default:
            return state
    }
}






//examples for exports

// export default (state={}, action) => {
//     if (action.type === 'a') state = {...state, num:action.payload} 
//     return state
// }
// import userReducer from '../Reducers/userReducer'




// const mainReducer = (state={}, action) => {
    //     if (action.type === 'a') state = {...state, num:action.payload} 
    //     return state
    // }
    // export default {
        //     mainReducer,
        // }

// import userReducer from '../Reducers/userReducer'
// userReducer.mainReducer

