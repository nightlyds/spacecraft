import initialState from '../initialState'

const oneLaunchReducer = (state = initialState.oneLaunch, action) => {
    switch(action.type){
        case "ONE_LAUNCH":
            return action.oneLaunch
        default:
            return state
    }
}

export default oneLaunchReducer;