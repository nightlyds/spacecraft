import initialState from '../initialState'

const launchesReducer = (state = initialState.launches, action) => {
    switch(action.type){
        case "LAUNCHES":
            return action.launches
        default:
            return state
    }
}

export default launchesReducer;