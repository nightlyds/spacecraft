import initialState from '../initialState'

const errorReducer = (state = initialState.error, action) => {
    switch(action.type){
        case "ERROR":
            return action.error
        default:
            return state
    }
}

export default errorReducer;